const { Router } = require("express");
const router = Router();

router.get("/:stringVal/lowercase", (req, res, next) => {
  res.json({ lowercase: req.params.stringVal.toLocaleLowerCase() });
});

router.get("/:stringVal/uppercase", (req, res, next) => {
  res.json({ uppercase: req.params.stringVal.toUpperCase() });
});

module.exports = router;
