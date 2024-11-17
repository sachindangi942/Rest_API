const Router = require("express").Router();

const User_schema = require("../schemas/schema");
const { check_token } = require("../jwt/jwt_token");
const {
    registration_control,
    login_control,
    forgot_password_controler,
    reset_password_controler,

} = require("../controlers/users_controler");


Router.post("/registration", registration_control);
Router.post("/login", check_token, login_control);
Router.post("/forgotPassword", forgot_password_controler);
Router.post("/resetPassword", reset_password_controler);

module.exports = Router;