module.exports = (sequelize, datatypes) => {
  const appReviews = sequelize.define('appReviews', {
    title: {
      type: datatypes.STRING,
      allowNull: false,
      trim: true,
    },
    review: {
      type: datatypes.STRING,
      allowNull: false,
      trim: true,
    },
  });
  return appReviews;
};
