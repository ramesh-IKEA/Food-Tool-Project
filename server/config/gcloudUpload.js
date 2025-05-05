const Cloud = require('@google-cloud/storage')
const { Storage } = Cloud
const storage = new Storage({
  projectId: process.env.GCP_PROJECT_ID,
})
module.exports = storage