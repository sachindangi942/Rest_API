const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const { create_token } = require("../jwt/jwt_token");
const { registration_val,
    login_val,
    forgot_password_val,
    reset_password_val,
} = require("../validation/validation");
const User_schema = require("../schemas/schema");
const sendEmail = require("../Utils/sendEmail");

const registration_control = async (req, res) => {
    try {
        const data = req.body;
        const hash_password = bcrypt.hashSync(data["password"], saltRounds)
        const { error, value } = registration_val({ data })
        data["password"] = hash_password
        if (error) return res.send(error.details.map(err => err.message));
        const newUser = new User_schema(data);
        const response = await newUser.save();
        const token = create_token({ data });
        res.send({ response, token })
    } catch (error) {
        res.status(401).send(error.message)
    }
};

const login_control = async (req, res) => {
    try {
        const user_data = req.body;
        const { error } = login_val({ user_data })
        if (error) return res.status(401).send(error.details.map(err => err.message));
        const db_data = await User_schema.findOne({ Email: user_data.Email });
        if (db_data?.password && db_data?.Email) {
            const isMatch_password = bcrypt.compareSync(user_data.password, db_data["password"]);
            if (isMatch_password) return res.send("login successfull");
        }
        res.status(401).send("invalid userName and password");
    } catch (error) {
        res.status(401).send(error.message)
    }
};



const forgot_password_controler = async (req, res) => {
    try {
        const { error } = forgot_password_val({ data: req.body });
        if (error) return res.send(error.details[0].message);
        const User = await User_schema.findOne({ Email: req.body.email });
        if (!User) return res.send("invalide user");
        const token = create_token({ data: req.body });
        User["resetPasswordToken"] = token;
        User["resetPasswordExpires"] = Date.now() + 10 * 60 * 1000;
        await User.save();
        const clickableLink = `<a href="http://localhost:7000/user/resetPassword/${token}">Reset your password</a>`
        await sendEmail(User.Email, "password reset", `<p>Click the following link to reset your password:</p>${clickableLink}`);
        res.send({ success: true, msg: "password reset link successfully send for Email" })

    } catch (error) {
        res.send(error.errmsg);
    }
};

const reset_password_controler = async (req, res) => {

    try {
        const { error } = reset_password_val({ data: req.body });
        if (error) return res.send(error.details[0].message);
        const decode = jwt.verify(req.query.resetPasswordToken, process.env.SECRET_KEY);
        const User = await User_schema.findOne({
            Email: decode.email,
            resetPasswordToken: req.query.resetPasswordToken,
            resetPasswordExpires: { $gt: Date.now() }
        })
        if (!User) return res.send({ msg: "invalide token" });
        const hashPassword = bcrypt.hashSync(req.body.password, 10);
        User["password"] = hashPassword;
        User.resetPasswordExpires = undefined;
        User.resetPasswordToken = undefined;
        res.send({ success: true, msg: "password successfully reset", token: req.query });

        await User.save();
    } catch (error) {
        res.send({ err: error.message });
    }
};

module.exports = {
    registration_control,
    login_control,
    forgot_password_controler,
    reset_password_controler
}