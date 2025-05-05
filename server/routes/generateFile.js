const {getSupportingFiles,generatePdf} =require('../controllers/generatePDF')
const express = require("express");
const {AuthCheck} = require('../utils/jwtHelper');
const router = express.Router();
router.get('/buyer_claim',AuthCheck, generatePdf);
router.get('/supporting_files',AuthCheck, getSupportingFiles);
module.exports = router;