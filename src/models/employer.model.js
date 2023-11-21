module.exports = (sequelize, dataType) => {
  const employer = sequelize.define('employer', {
    name: {
      type: dataType.STRING,
    },
    dateFounded: {
      type: dataType.DATE,
    },
    employees: {
      type: dataType.STRING,
    },
  });
  return employer;
};
