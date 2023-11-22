const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { tokenService, menteeService } = require('../services');

const menteeRegister = catchAsync(async (req, res) => {
  const user = await menteeService.createMentee(req.body);
  const tokens = await tokenService.generateAuthTokens(user.dataValues.id);
  res.status(httpStatus.CREATED).send({ user, tokens });
});

module.exports = {

}
