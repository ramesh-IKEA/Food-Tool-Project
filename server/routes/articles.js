const express = require("express");
const router = express.Router();
const {AuthCheck} = require('../utils/jwtHelper');
const processFile = require("../middlewares/upload");
const {postCreateArticle,postArticleStatus,getArticle,postArticleQty,postUpdateArticle} =require('../controllers/article')
// save case
router.post('/create',AuthCheck,processFile, postCreateArticle);
router.post('/update',AuthCheck,processFile, postUpdateArticle);
router.post('/status/update',AuthCheck, postArticleStatus);
router.post('/get',AuthCheck, getArticle);
router.post('/store_qty',AuthCheck,processFile, postArticleQty);
module.exports = router;