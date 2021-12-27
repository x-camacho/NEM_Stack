const router = require("express").Router();
const ctrls = require("../controllers/shoes");

router.get("/", ctrls.showShoes);
router.get("/:id", ctrls.showShoe);

module.exports = router;