const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/authJwt");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/viewer", [authJwt.verifyToken], controller.viewerBoard);

  app.get(
    "/api/test/edi",
    [authJwt.verifyToken, authJwt.isEditor],
    controller.editorBoard
  );

  app.get(
    "/api/test/creator",
    [authJwt.verifyToken, authJwt.isCreator],
    controller.creatorBoard
  );
};
