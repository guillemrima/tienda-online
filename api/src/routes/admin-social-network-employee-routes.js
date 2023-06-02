module.exports = (app, upload) => {

    const router = require("express").Router();
    // const authJwt  = require("../middlewares/auth-jwt.js");
    const controller = require("../controllers/admin/social-network-employee-controller.js");
  
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "Authorization, Origin, Content-Type, Accept"
        );
        next();
    });
  
    router.post("/", controller.create);
    router.get("/", controller.findAll);  
    router.get("/:id", controller.findOne);  
    router.put("/:id", controller.update);  
    router.delete("/:id", controller.delete);
  
    app.use('/api/admin/social-networks-employees', router);
  };
    