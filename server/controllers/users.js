const dbConnection = require('../utils/DbConnection')
const {InsertUser,getUsers,resetPassword,updateStatus} = require ('../models/Users')
exports.postCreateUsers =async(req,res,next)=>{
    const response =await InsertUser(req.body);
    if (response) {
        res.send({ 'message': 'User Create Sucessfully' }).status(200);
      } else {
        res.send({ 'message': 'Something went wrong' }).status(400)
      }
}
exports.getUserslist=async(req,res,next)=>{
    const {q}=req.params;
    const response =await getUsers();
    if (response) {
        res.send({ 'records':response}).status(200);
      } else {
        res.send({ 'message': 'Something went wrong' }).status(400)
      }
}
exports.postResetPassword=async(req,res,next)=>{
    const {email,short_id}=req.body;
    const response =await resetPassword(email,short_id);
    if (response) {
        res.send({ 'message':'Sucessfully updated'}).status(200);
      } else {
        res.send({ 'message': 'Something went wrong' }).status(400)
      }
}
exports.postStatusUpdate=async(req,res,next)=>{
    const {email,status}=req.body;
    const response =await updateStatus(email,status);
    if (response) {
        res.send({ 'message':'Sucessfully updated'}).status(200);
      } else {
        res.send({ 'message': 'Something went wrong' }).status(400)
      }
}