module.exports = (sequelize, dataType) => {
  const Mentorship = sequelize.define('mentorships', {
    mentorId: {
      type: dataType.INTEGER,
      allowNull: false,
    },
    menteeId: {
      type: dataType.INTEGER,
      allowNull: false,
    },
    status: {
      type: dataType.ENUM('inProgress', 'completed'),
    },
    startDate: {
      type: dataType.DATE,
    },
    endDate: {
      type: dataType.DATE,
    },
  });
  return Mentorship;
};
