const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  console.log(req.headers);
  let token = req.headers.authorization;
  //Check: is there a token?

  if (!token) {
    res.json("The token does not exist");
  }

  token = token.split(" ")[1];
  const secret = process.env.SECRET;
  //Verify that it is correct or not
  jwt.verify(token, secret, (err, result) => {
    //! important statement
    req.user = result;
    req.token = result;

    if (err) {
      res.status(403).json({
        success: true,
        message: "The token is invalid or expired",
      });
      // if token is correct
    } else {
      next();
    }
  });
};
module.exports = authentication;
