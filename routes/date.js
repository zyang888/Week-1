const { Router } = require("express");
const router = Router();

router.get("/year", (req, res, next) => {
  res.json({ year: new Date().getFullYear() });
});

router.get("/month", (req, res, next) => {
  res.json({ month: new Date().getMonth() });
});

router.get("/day", (req, res, next) => {
  res.json({ day: new Date().getDate() });
});

module.exports = router;
