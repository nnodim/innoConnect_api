module.exports = (sequelize, datatypes) => {
  const Subscription = sequelize.define('subscription', {
    userId: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
    planId: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
    startDate: {
      type: datatypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: datatypes.DATE,
      allowNull: false,
    },
    status: {
      type: datatypes.ENUM('active', 'inactive', 'canceled'),
    },
  });
  return Subscription;
};
