const { Router } = require("express");
const router = Router();

router.use("/date", require("./date"));
router.use("/math", require("./math"));
router.use("/string", require("./string"));
router.use("/parrot", require("./parrot"));

module.exports = router;
