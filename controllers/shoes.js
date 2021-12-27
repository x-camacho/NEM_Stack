const db = require("../models/shoe");

const showShoes = (req, res) => {
    res.render("shoes/index", {
        shoes: db.getAll(),
    });
};

const showShoe = (req, res) => {
    res.render("shoes/show", {
        shoes: db.getOne(req.params.id),
    });
}

module.exports = {
    showShoes,
    showShoe,
}