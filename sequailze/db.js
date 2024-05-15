const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('Students', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, 
});
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to MySQL database successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
const student_details = sequelize.define('student_details', {
  Regno: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Mark: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  native: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false 
});
(async () => {
  try {
    await student_details.sync({ force: false });
    console.log('student_details table synced successfully.');
  } catch (error) {
    console.error('Error syncing student_details:', error);
  }
})();
module.exports = student_details;
