const router = require("express").Router();
router.use("/auth", require("./auth.Router"));
router.use("/articles", require("./Articles.Router"))
router.use("/user", require("./user.Router"))
router.use("/videos", require("./Videos.Router"));

module.exports = router;