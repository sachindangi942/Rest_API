const joi = require("joi");

const registration_val = ({ data }) => {
    const validation_schema = joi.object({
        Name: joi.string().required().min(2).max(15),
        Email: joi.string().email().required(),
        Mobile: joi.string().required().pattern(/^\+?[6-9][0-9]{9}$/).message({
            'string.pattern.base': 'Mobile number must be a valid 10-digit number',
            'any.required': 'Mobile number is required'
        }),
        password: joi.string().required(),
        confirmPassword: joi.string().valid(joi.ref('password')).required()
        .messages({
            "any.only": "Passwords do not match",
            "any.required": "Confirm password is required",
          })
    });

    return validation_schema.validate(data);
};

const login_val =({data})=>{
    const validation_schema = joi.object({
        Email:joi.string().email().required(),
        password:joi.string().required()
    });
    return validation_schema.validate(data);
};


const forgot_password_val =({data})=>{
const validation_schema = joi.object({
    email:joi.string().email().required()
});
return validation_schema.validate(data);
};

const reset_password_val =({data})=>{
const validation_schema = joi.object({
    password:joi.string().required().min(6)
});
 return validation_schema.validate(data);
};

module.exports = {
     registration_val,login_val, 
     forgot_password_val,
     reset_password_val,
     }