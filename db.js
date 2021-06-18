const { INTEGER, STRING } = require('sequelize');
const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/employee_db')

const Employee = db.define('employee', {
  name: {
    type: STRING,
    allowNull: false
  }
})

const Company = db.define('company', {
  name: {
    type: STRING,
    unique: true
  }
})

const City = db.define('city', {
  name: {
    type: STRING
  }
})

Company.hasMany(Employee);
Employee.belongsTo(Company);

module.exports = { db };