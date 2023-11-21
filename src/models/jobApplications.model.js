const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const JobApplication = sequelize.define('jobApplication', {
    userId: {
      type: dataType.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    jobId: {
      type: dataType.INTEGER,
      allowNull: false,
    },
    firstName: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    lastName: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    email: {
      type: dataType.STRING,
      allowNull: false,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    phone: {
      type: dataType.STRING,
      trim: true,
    },
    cv: {
      type: dataType.STRING,
      trim: true,
    },
    status: {
      type: dataType.ENUM('pending', 'accepted', 'rejected'),
    },
  });
  return JobApplication;
};
