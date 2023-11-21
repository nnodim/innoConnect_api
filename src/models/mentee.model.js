module.exports = (sequelize, dataType) => {
  const mentee = sequelize.define('mentee', {
    availabilty: {
      type: dataType.JSON,
    },
  });
  return mentee;
};
