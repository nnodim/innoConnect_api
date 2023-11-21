module.exports = (sequelize, dataType) => {
  const todo = sequelize.define('todo', {
    title: {
      type: dataType.STRING,
      allowNull: false,
    },
    description: {
      type: dataType.STRING,
      allowNull: false,
    },
    isDone: {
      type: dataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
  return todo;
};
