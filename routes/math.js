const _ = require("lodash");
const { Router } = require("express");
const router = Router();

router.use((req, res, next) => {
  const body = req.body;
  if (_.isArray(body) && body.every(_.isNumber)) {
    next();
  } else {
    res.status(400).send("Body must be an array of numbers");
  }
});

router.post("/sum", (req, res, next) => {
  const sum = req.body.reduce((runningSum, num) => num + runningSum, 0);
  res.json({ sum });
});

router.post("/product", (req, res, next) => {
  if (req.body.length == 0) {
    res.sendStatus(400).send("Product requires at least two values");
  } else {
    const product = req.body.reduce(
      (runningProduct, num) => num * runningProduct
    );
    res.json({ product });
  }
});

module.exports = router;
