import joi from "joi";

export const ValidateSignUp = (userData) => {
    const Schema = joi.object({
        fullname: joi.string().required().min(3),
        
        email: joi.string().required().email(),
        
        password: joi.string().required().min(6),

        address: joi.array().items(joi.object({detail: joi.string, for: joi.string})),

        phoneNumber: joi.number()
    });

    return Schema.validateAsync(userData);
};


const ValidateSignIn = (userData) => {
    const Schema = joi.object({
        email: joi.string().required().email(),
        password: joi.string().required.min(6)
    });

    return Schema.validateAsync(userData);
};



























// to check whether the data is according to the schema or not. Eg:for phone numbers it should be numbers only and not any alphabets

