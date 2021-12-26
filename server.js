const PORT = process.env.PORT || 4000; //for deployment in heroku

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();

const sources = [
    {
        name: 'SneakerNews',
        address: 'https://sneakernews.com/tag/air-jordan-1/',
    },
    {
        name: 'NiceKicks',
        address: 'https://www.nicekicks.com/air-jordan-release-dates/',
    },
]

app.get('/', (req,res) => {
    res.json('Welcome to my API');
});

const articles = [];

sources.forEach(source => {
    axios.get(source.address)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html);
        $('a:contains("Air Jordan 1")', html).each(function() {
            const title = $(this).text()
            const url = $(this).attr('href')
            articles.push({
                title,
                url,
                source: source.name,
            })
        })
    }).catch((err) => console.log(err))
 });

app.get('/show', (req, res) => {
    res.json(articles);
});

const specificSources = []

app.get('/show/:idx', (req, res) => {
    const idx = req.params.idx; 
    const sourcesAddress = sources.filter(source => source.name == idx)[0].address
    console.log(sourcesAddress)
    axios.get(sourcesAddress)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        $('a:contains("Air Jordan 1")', html).each(function () {
            const title = $(this).text()
            const url = $(this).attr('href')
            specificSources.push({
                title,
                url,
                source: idx
            })
        })
        res.json(specificSources)
    }).catch(err => console.log(err))
})
 

app.listen(PORT, () => console.log(`YO! Server is connected at ${PORT}`))