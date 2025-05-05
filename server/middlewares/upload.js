const util = require("util");
const os = require('os')
const Multer = require("multer");
const maxSize = 2 * 1024 * 1024;

let processFile = Multer({
  dest: os.tmpdir(),
  limits: { fileSize: maxSize }
}).any();

let processFileMiddleware = util.promisify(processFile);
module.exports = processFileMiddleware;