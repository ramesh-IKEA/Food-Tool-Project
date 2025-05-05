const path = require('path');
const fs = require("fs");
const cwd = path.join('/tmp/');
const gc = require('../config/gcloudUpload')
const bucketName = process.env.GCP_FILES_BUCKET;
exports.uploadImage =  (file) => {
    return new  Promise(async (resolve, reject) => {
    try {
        const UniqueID = Math.random().toString().substring(5);
        const { originalname, path } = file
        const fileName = UniqueID + '_' + originalname.replace(/ /g, "_");
        const options = {
            destination: fileName,
        };
        await gc.bucket(bucketName).upload(path, options);
        resolve(fileName);
    }
    catch (error) {
        reject(error);
    }
})
}
exports.dowloadFile = async (fileName) => {
    const destinationFile =path.join(cwd,fileName);
    const options = {
        destination: destinationFile,
    };
    try {
        // Download the file from the GCS bucket
        await gc.bucket(bucketName).file(fileName).download(options);
        // Set the permissions for the downloaded file
        await fs.promises.chmod(destinationFile, 0o777);
        console.log('File downloaded successfully and permissions set.');
        return destinationFile;
   
      
    } catch (error) {
        console.error('Error downloading file:', error);
        throw error; // Rethrow the error to handle it elsewhere
    }
}