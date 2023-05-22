const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

verfiyToken = (req, res, next) => {
  let token = req.headers["x=access-token"];
  if (!token) {
    return res.status(403).send({ message: "no token provided" });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    req.userId = decoded.id;
    next();
  });
};

isCreator = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "creator") {
            next();
            return;
          }
        }
        res.status(403).send({ message: " require creator role" });
        return;
      }
    );
  });
};

isEditor = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "editor") {
            next();
            return;
          }
        }
        res.status(403).send({ message: " require editor role" });
        return;
      }
    );
  });
};

const authJwt = {
  verfiyToken,
  isCreator,
  isEditor,
};

module.exports = authJwt;
