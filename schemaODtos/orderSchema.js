const Joi = require('joi');

const id = Joi.number().integer().integer();
const customerId = Joi.number().integer();

const getOrderSchema = Joi.object({
    id: id.required(),
});

const createOrderSchema = Joi.object({
    customerId: customerId.required(),
});

//se le podrían agregar cosas como estados(entregada, se pago, no se pago, etc.), dirección, etc.

module.exports = { getOrderSchema, createOrderSchema };