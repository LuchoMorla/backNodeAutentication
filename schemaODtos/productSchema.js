const Joi = require('joi');

/*  ya no lo necesitamos, ahora que nos vamos a conectar a la base de datos y tenemos id id con la regla de autoincremental... ya podemos ignorar el uuid y utilizarlo como un 
integer
const id = Joi.string().uuid(); */
const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
// const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const image = Joi.string().uri(); 
const categoryId = Joi.number().integer();

//recibiremos un limit y un offset
const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
    image: image.required(),
    categoryId: categoryId.required()
});

const updateProductSchema = Joi.object({
    name: name,
    price: price,
    image: image,
    description: description,
    categoryId: categoryId
});

const getProductSchema = Joi.object({
    id: id.required(),
});

const queryProductSchema = Joi.object({
    limit,
    offset
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema, queryProductSchema }