const joi = require('joi');

const createPlan = {
  body: joi.object().keys({
    name: joi.string(),
    description: joi.string(),
    price: joi.number(),
    duration: joi.number(),
  }),
};
