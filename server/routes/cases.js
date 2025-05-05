const express = require("express");
const router = express.Router();
const processFile = require("../middlewares/upload");
const { AuthCheck } = require('../utils/jwtHelper');

const { postCreateCase, getCases, getCase, postStatusUpdate, getOneCase, postUpdateCase, postAssign, requestStores,getAssociatedStores ,requestSingleStore} = require('../controllers/case')
// save case
router.post('/create', AuthCheck, processFile, postCreateCase);
router.post('/update', AuthCheck, processFile, postUpdateCase);
router.post('/assign_to_me', AuthCheck, postAssign);
router.post('/update/status', AuthCheck,processFile, postStatusUpdate);
router.get('/fetch', AuthCheck, getCases);
router.get('/fetchOne', AuthCheck, getCase);
router.get('/get', AuthCheck, getCase);
router.post('/request_stores', AuthCheck, requestStores);
router.post('/request_single_store', AuthCheck, requestSingleStore);
router.get('/associated_store_list', AuthCheck, getAssociatedStores);

module.exports = router;