const multipart = require('connect-multiparty');
exports.multipartMiddleware = multipart({
    uploadDir : '../public/supporting_files',
});
exports.multipartMiddlewareArticle = multipart({
    uploadDir : '../public/article_pictures',
});
