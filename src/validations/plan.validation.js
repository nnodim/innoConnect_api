const joi = require('joi');

const createPlan = {
  body: joi.object().keys({
    name: joi.string(),
    description: joi.string(),
    price: joi.number(),
    duration: joi.number(),
  }),
};

const getPlans = {
  query: joi.object().keys({
    name: joi.string(),
    description: joi.string(),
    price: joi.number(),
    duration: joi.number(),
    sortBy: joi.string(),
    limit: joi.number().integer(),
    page: joi.number().integer(),
  }),
};

const updatePlan = {
  body: joi.object().keys({
    name: joi.string(),
    description: joi.string(),
    price: joi.number(),
    duration: joi.number(),
  }),
};

const deletePlan = {
  params: joi.object().keys({
    planId: joi.string().required(),
  }),
};

module.exports = {
  createPlan,
  updatePlan,
  deletePlan,
  getPlans,
};
