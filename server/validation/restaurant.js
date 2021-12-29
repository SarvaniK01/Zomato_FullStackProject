import joi from "joi";

export const ValidateRestaurantId = (resId) =>{
    const Schema = joi.object({
        _id: joi.string().required()
    });
    
    return Schema.validateAsync(resId);
};

export const ValidateRestaurantCity = (resCity) =>{
    const Schema = joi.object({
        city: joi.string().required()
    });

    return Schema.validateAsync(resCity);
};


export const ValidateRestaurantSearchString = (resSearchString) =>{
    const Schema = joi.object({
        searchString: joi.string().required()
    });

    return Schema.validateAsync(resSearchString);
};
