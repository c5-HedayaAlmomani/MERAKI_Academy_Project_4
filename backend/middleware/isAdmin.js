const isAdmin = (req, res, next) => {
  if (req.user.isAdmin == true) {
    next();
  }else{
      res.json("You are not Admin, you are not allowed to do this")
  }
};

module.exports = isAdmin;
