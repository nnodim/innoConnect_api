module.exports = (sequelize, dataType) => {
  const jobs = sequelize.define('jobs', {
    title: {
      type: dataType.STRING,
    },
    description: {
      type: dataType.TEXT,
    },
    location: {
      type: dataType.STRING,
    },
    workSetup: {
      type: dataType.STRING,
    },
    type: {
      type: dataType.STRING,
    },
    experience: {
      type: dataType.STRING,
    },
    requirements: {
      type: dataType.TEXT,
    },
    benefits: {
      type: dataType.TEXT,
    },
    salary: {
      type: dataType.STRING,
    },
    status: {
      type: dataType.ENUM('open', 'closed'),
    },
    endDate: {
      type: dataType.DATE,
    },
  });
  return jobs;
};
