const express = require('express');
const router = express.Router();

const controller = require('../controllers/authController')
const middleware = require('../middleware')

router.post("/login", controller.Login);
router.post("/register", controller.Register);
router.put(
  "/update/:user_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
);
router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
);

module.exports = router;
