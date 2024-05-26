const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const registerValidationSchema = (body) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label('Email'),
        password: passwordComplexity().required().label('Password')
    });
    return schema.validate(body);
};

const loginValidationSchema = (body) => {
    const schema = Joi.object({
        email: Joi.string().allow('', null).label('Email'),
        password: Joi.string().required().label('Password')
    });
    return schema.validate(body);
};

module.exports = { registerValidationSchema, loginValidationSchema };
