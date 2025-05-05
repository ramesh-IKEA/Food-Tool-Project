const jwt = require('jsonwebtoken');
const config = require("../config/app");
const SECRET_KEY = config.secret;  // Store this securely!
const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
        expiresIn: '1d'
    });
};
const AuthCheck = (req, res, next) => {
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    //if no token found, return response (without going to the next middelware)
    if (!token) return res.status(401).send("Access denied. No token provided.");
  
    try {
      //if can verify the token, set req.user and pass to next middleware
      const decoded = jwt.verify(token, SECRET_KEY);
      req.user = decoded;
      next();
    } catch (ex) {
      //if invalid token
      res.status(400).send("Invalid token.");
    }
};
module.exports = { generateToken, AuthCheck };