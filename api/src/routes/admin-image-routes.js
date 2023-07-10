module.exports = (app, upload) => {

    const router = require("express").Router();
    const authJwt  = require("../middlewares/auth-jwt.js");
    const controller = require("../controllers/admin/image-controller.js");
  
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "Authorization, Origin, Content-Type, Accept"
        );
        next();
    });

    const uploadFields = upload.fields([
      { name: 'file', maxCount: 1 },
    ])
  
    router.post("/", [uploadFields], controller.create);
    router.get("/", controller.findAll);  
    router.get("/:filename", controller.findOne);  
    router.put("/:id", [authJwt.verifyUserToken], controller.update);  
    router.delete("/:filename", [authJwt.verifyUserToken],controller.delete);
  
    app.use('/api/admin/images', router);
  };
    