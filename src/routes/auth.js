const router = require('express').Router();
const login_user = require('../controllers/loginController');
const logout_user = require('../controllers/logoutController');

router.post('/login', login_user);
router.post('/logout/:id', logout_user);

module.exports = router;
