module.exports = (sequelize, Sequelize) => {
  const Courses = sequelize.define('courses', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.FLOAT,
    },
    experienceLevel: {
      type: Sequelize.ENUM('beginner', 'intermediate', 'advanced'),
    },
    duration: {
      type: Sequelize.INTEGER,
    },
    startDate: {
      type: Sequelize.DATE,
    },
    endate: {
      type: Sequelize.DATE,
    },
  });
  return Courses;
};
