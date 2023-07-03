const router = require("express").Router();
router.get("/", function (req, res) {
  res.send("Hii");
});
module.exports = router;
