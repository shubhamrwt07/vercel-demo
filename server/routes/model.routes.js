const userController = require("../controller/user.controller")


module.exports = function Route(app) {
    app.post("/api/",userController.logIn);

   
    
   
}