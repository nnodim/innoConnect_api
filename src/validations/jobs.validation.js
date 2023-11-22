const joi = require('joi');

const createJob = {
  body: joi.object().keys({
    title: joi.string().required(),
    description: joi.string().required(),
    location: joi.string().required(),
    workSetup: joi.string().required(),
    type: joi.string().required(),
    experience: joi.string(),
    requirements: joi.string(),
    benefits: joi.string(),
    salary: joi.string(),
    status: joi.string(),
    endDate: joi.date(),
  }),
};

const getJobs = {
  query: joi.object().keys({
    title: joi.string(),
    description: joi.string(),
    location: joi.string(),
    workSetup: joi.string(),
    type: joi.string(),
    experience: joi.string(),
    sortBy: joi.string(),
    limit: joi.number().integer(),
    page: joi.number().integer(),
  }),
};

const updateJob = {
  body: joi.object().keys({
    title: joi.string(),
    description: joi.string(),
    location: joi.string(),
    workSetup: joi.string(),
    type: joi.string(),
    experience: joi.string(),
    requirements: joi.string(),
    benefits: joi.string(),
    salary: joi.string(),
    status: joi.string(),
    endDate: joi.date(),
  }),
};

const deleteJob = {
  params: joi.object().keys({
    jobId: joi.string().required(),
  }),
};

module.exports = {
  createJob,
  getJobs,
  updateJob,
  deleteJob,
};
