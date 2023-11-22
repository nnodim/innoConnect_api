module.exports = (sequelize, datatypes) => {
  const courseCategories = sequelize.define('courseCategories', {
    name: {
      type: datatypes.STRING,
      allowNull: false,
    },
    description: {
      type: datatypes.STRING,
    },
  });
  return courseCategories;
};
