const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token;

  if (!req.headers["authorization"]) {
    let cookieSplit = req.headers["cookie"].split("=");
    token = cookieSplit[1];
  } else {
    token = req.headers["authorization"];
  }

  if (!token) {
    return res.status(403).send("A token is required..");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
