const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "iusedtohaveanimaginarytwinsister";
const expiration = "2h";

module.exports = {
  // Verify token on authenticated routes
  authMiddleware: function (req, res, next) {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(400).json({ message: "You have no token!" });
    }

    // Verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.admin = data;
    } catch {
      console.log("Invalid token");
      return res.status(400).json({ message: "invalid token!" });
    }

    // send to next endpoint
    next();
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
