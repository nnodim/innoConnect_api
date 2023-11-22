const joi = require('joi');

module.exports = {
  createAppReview: {
    body: joi.object().keys({
      title: joi.string().required(),
      description: joi.string(),
    }),
  },

  getAppReviews: {
    query: joi.object().keys({
      sortBy: joi.string(),
      limit: joi.number().integer(),
      page: joi.number().integer(),
    }),
  },

  deleteAppReview: {
    params: joi.object().keys({
      id: joi.string().required(),
    }),
  },
};
