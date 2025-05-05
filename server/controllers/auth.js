const { use } = require('../routes/cases');
const dbConnection = require('../utils/DbConnection')
const { generateToken } = require('../utils/jwtHelper')
exports.postLogin = async (req, res, next) => {
    const { username, password } = req.body
    let decriptPassword = atob(password).split('&');
    const LogedInUser = await dbConnection.query("SELECT * FROM tbl_users WHERE email ='" + username + "' AND password='" + decriptPassword[0] + "' AND is_active =true");
    if (LogedInUser.rowCount > 0) {
        const token = generateToken({ "id": LogedInUser.rows[0].id, 'email': LogedInUser.rows[0].email });
        res.header('authorization', token)
        let result = {
            'message': 'Success',
            'email': username,
            'store_id': LogedInUser.rows[0].unit_id,
            'ufunction': LogedInUser.rows[0].user_function,
            'unit_name': LogedInUser.rows[0].unit_name,
            'user_email': LogedInUser.rows[0].email,
            'token': token
        };
        return res.send(result).status(200);
    }
    else {
        let result = { 'message': 'Wrong credientials' };
        return res.status(401).send(result);
    }

}
exports.postUpdatePassword = async (req, res, next) => {
    const { password, user_id } = req.body
    let decriptPassword = atob(password).split('&');
    try {
        const Query = "UPDATE tbl_users  SET password =$1  WHERE email = $2";
        await dbConnection.query(Query, [decriptPassword[0], user_id]);
        return res.send({ 'message': 'Sucessfully updated password. Login again' }).status(200);
    } catch (err) {
        let result = { 'message': 'Not able to update try again.' };
        return res.status(401).send(result);
    }
}