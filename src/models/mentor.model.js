module.exports = (sequelize, dataType) => {
  const mentor = sequelize.define('mentor', {
    availabilty: {
      type: dataType.JSON,
    },
    rating: {
      type: dataType.FLOAT,
    },
    jobTitle: {
      type: dataType.STRING,
    },
  });
  return mentor;
};
