const express = require("express");
const router = express.Router();
const {postLogin,postUpdatePassword} =require('../controllers/auth')
const {postCreateUsers,getUserslist,postResetPassword,postStatusUpdate} =require('../controllers/users')
const { AuthCheck } = require('../utils/jwtHelper');
router.post('/login', postLogin);
router.post('/update_password',AuthCheck,postUpdatePassword);
router.post('/user/create',AuthCheck, postCreateUsers);
router.get('/user/get',AuthCheck, getUserslist);
router.post('/user/reset/password',AuthCheck,postResetPassword);
router.post('/user/status',AuthCheck,postStatusUpdate);
module.exports = router;