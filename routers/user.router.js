const express = require('express');
const Router = express.Router();
const userController = require("../controller/user.controller");

Router.post("/registration", userController.registerUser);
Router.get("/fetchuser", userController.singleUser);
Router.post("/updateuser", userController.editUser);
Router.post("/deleteuser", userController.deleteUser);

module.exports = Router;