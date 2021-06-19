const { INTEGER, STRING } = require('sequelize');
const Sequelize = require('sequelize');
const faker = require('faker');
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
City.hasMany(Company);
City.hasMany(Employee);

const seedDB = async() =>{
  const co1 = await Company.create({
    name: faker.company.companyName()
  })
  const co2 = await Company.create({
    name: faker.company.companyName()
  })
  const ep1 = await Employee.create({
    name: faker.name.firstName(),
    companyId: 2
  })
  const ep2 = await Employee.create({
    name: faker.name.firstName(),
    companyId: 1
  })
}

module.exports = { db, Company, Employee, City, seedDB };