const { Router } = require("express");
const { loginUser, sayHi } = require("../controllers/users");

const router = Router();

router.post("/login", loginUser);
router.get("/hi", sayHi);

module.exports = router;
