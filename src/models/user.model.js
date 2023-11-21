const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const user = sequelize.define('user', {
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
    dob: {
      type: dataType.DATE,
    },
    gender: {
      type: dataType.ENUM('male', 'female'),
    },
    bio: {
      type: dataType.TEXT,
    },
    siklls: {
      type: dataType.TEXT,
    },
    profileImg: {
      type: dataType.STRING,
      default: 'profileDefault',
    },
    cover_img: {
      type: dataType.STRING,
      default: 'default',
    },
    address: {
      type: dataType.STRING,
    },
    cv: {
      type: dataType.STRING,
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
    googleId: {
      type: dataType.STRING,
      trim: true,
    },
    appleId: {
      type: dataType.STRING,
      trim: true,
    },
    password: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
      minlength: 8,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error('Password must contain at least one letter and one number');
        }
      },
    },
    isEmailVerified: {
      type: dataType.BOOLEAN,
    },
    role: {
      type: dataType.ENUM('admin', 'mentee', 'mentor', 'employer'),
      allowNull: false,
      trim: true,
    },
  });

  return user;
};
