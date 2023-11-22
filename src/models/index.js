const Sequelize = require('sequelize');
const { sequelize } = require('../config/config');
const logger = require('../config/logger');

// const sequelizeInstance = new Sequelize(sequelize.url);
const db = {};

const sequelizeInstance = new Sequelize(sequelize.database, sequelize.user, sequelize.password, {
  host: sequelize.host,
  dialect: sequelize.dialect,
  pool: {
    min: 0,
    max: 100,
    acquire: 5000,
    Idle: 1000,
  },
});

sequelizeInstance
  .authenticate()
  .then(() => logger.info('DB connected'))
  .catch((err) => {
    logger.error(err);
  });

db.sequelize = sequelizeInstance;
db.Sequelize = Sequelize;

db.users = require('./user.model')(sequelizeInstance, Sequelize);
db.tokens = require('./token.model')(sequelizeInstance, Sequelize);
db.mentors = require('./mentor.model')(sequelizeInstance, Sequelize);
db.mentees = require('./mentee.model')(sequelizeInstance, Sequelize);
db.employers = require('./employer.model')(sequelizeInstance, Sequelize);
db.jobs = require('./jobs.model')(sequelizeInstance, Sequelize);
db.jobApplications = require('./jobApplications.model')(sequelizeInstance, Sequelize);
db.todos = require('./todo.model')(sequelizeInstance, Sequelize);
db.mentorships = require('./mentorship.model')(sequelizeInstance, Sequelize);
db.plans = require('./plan.model')(sequelizeInstance, Sequelize);
db.subscriptions = require('./subscription.model')(sequelizeInstance, Sequelize);
db.appReviews = require('./appReviews.model')(sequelizeInstance, Sequelize);
db.courses = require('./courses.model')(sequelizeInstance, Sequelize);
db.courseEnrollment = require('./courseEnrollment.model')(sequelizeInstance, Sequelize);
db.courseCategories = require('./courseCategories.model')(sequelizeInstance, Sequelize);

// db.teachers = require('./teacher.model')(sequelizeInstance, Sequelize);
// db.subjects = require('./subject.model')(sequelizeInstance, Sequelize);
// db.teachers_subjects = require('./teacher_subject.model')(sequelizeInstance, Sequelize);

//= ==============================
// Define all relationships here below
//= ==============================
// db.User.hasMany(db.Role);
// db.Role.belongsTo(db.User);
// db.teachers.belongsToMany(db.subjects, { through: db.teachers_subjects });
// db.subjects.belongsToMany(db.teachers, { through: db.teachers_subjects });

db.users.hasMany(db.mentors);
db.mentors.belongsTo(db.users);

db.users.hasMany(db.mentees);
db.mentees.belongsTo(db.users);

db.users.hasMany(db.employers);
db.employers.belongsTo(db.users);

db.mentors.hasMany(db.courses);
db.courses.belongsTo(db.mentors);

db.mentees.belongsToMany(db.courses, { through: db.courseEnrollment });
db.courses.belongsToMany(db.mentees, { through: db.courseEnrollment });

db.employers.hasMany(db.jobs);
db.jobs.belongsTo(db.employers);

db.users.hasMany(db.appReviews);
db.appReviews.belongsTo(db.users);

db.users.belongsToMany(db.jobs, { through: 'bookmarks' });
db.jobs.belongsToMany(db.users, { through: 'bookmarks' });

db.users.belongsToMany(db.jobs, { through: db.jobApplications });
db.jobs.belongsToMany(db.users, { through: db.jobApplications });

db.mentors.belongsToMany(db.mentees, { through: db.mentorships });
db.mentees.belongsToMany(db.mentors, { through: db.mentorships });

db.users.belongsToMany(db.plans, { through: db.subscriptions });
db.plans.belongsToMany(db.users, { through: db.subscriptions });

db.courseCategories.hasMany(db.courses);
db.courses.belongsTo(db.courseCategories);

db.users.hasMany(db.todos);
db.todos.belongsTo(db.users);

module.exports = {
  db,
};
