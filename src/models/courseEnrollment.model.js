module.exports = (sequelize, datatypes) => {
  const CourseEnrollment = sequelize.define('courseEnrollment', {
    menteeId: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
    courseId: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: datatypes.ENUM('inProgress', 'completed'),
    },
  });
  return CourseEnrollment;
};
