const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

// WebScrape Links ------------>
const shoeLinks = [
    {
        name: 'SneakerNews',
        address: 'https://sneakernews.com/tag/air-jordan-1/',
    },
    {
        name: 'NiceKicks',
        address: 'https://www.nicekicks.com/air-jordan-release-dates/',
    },
]

// WebScrape to get DB function 
const shoes = [];
shoeLinks.forEach(shoeLink => {
    axios.get(shoeLink.address)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html);
        $('a:contains("Air Jordan 1")', html).each(function() {
            const title = $(this).text()
            const url = $(this).attr('href')
            shoes.push({
                title,
                url,
                source: shoeLinks.name,
            })
        }),console.log(shoes)
    }).catch((err) => console.log(err))
});

// Individual Webscrape Links //
// const specificShoe = []
// const idx = req.params.idx; 
// const shoesAddress = shoeLinks.filter(shoeLink => shoe.name == idx)[0].address
//     axios.get(shoesAddress)
//     .then(response => {
//         const html = response.data
//         const $ = cheerio.load(html)
//         $('a:contains("Air Jordan 1")', html).each(function () {
//             const title = $(this).text()
//             const url = $(this).attr('href')
//             specificShoe.push({
//                 title,
//                 url,
//                 source: idx
//             })
//         })
//     }).catch(err => console.log(err))
;

const getAll = () => {
    return shoes;
}

const getOne = (idx) => {
    return shoes[idx];
}

module.exports = {
    shoes, 
    getAll,
    getOne,
}