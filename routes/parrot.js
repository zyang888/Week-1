const { Router } = require("express");
const router = Router();

router.all("/", (req, res, next) => {
  res.json({
    body: req.body,
    query: req.query,
    method: req.method,
  });
});

module.exports = router;
