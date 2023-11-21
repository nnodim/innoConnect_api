module.exports = (sequelize, datatypes) => {
  const Plan = sequelize.define('plan', {
    name: {
      type: datatypes.STRING,
    },
    description: {
      type: datatypes.STRING,
    },
    price: {
      type: datatypes.FLOAT,
    },
    duration: {
      type: datatypes.INTEGER,
    },
  });
  return Plan;
};
