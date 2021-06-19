const Sequelize = require('sequelize');
const { INTEGER, STRING } = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/employee_db', {logging:false});
const faker = require('faker');

const Employee = db.define('employee', {
  name: {
    type: STRING
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
Company.hasMany(City);
Employee.belongsTo(Company);
Employee.belongsTo(City);
City.belongsTo(Company)

const seedDB = async() =>{
  const co1 = await Company.create({
    name: faker.company.companyName()
  })
  const co2 = await Company.create({
    name: faker.company.companyName()
  })
  const co3 = await Company.create({
    name: faker.company.companyName()
  })
  const co4 = await Company.create({
    name: faker.company.companyName()
  })
  const co5 = await Company.create({
    name: faker.company.companyName()
  })
  const co6 = await Company.create({
    name: faker.company.companyName()
  })
  const co7 = await Company.create({
    name: faker.company.companyName()
  })
  const co8 = await Company.create({
    name: faker.company.companyName()
  })
  const co9 = await Company.create({
    name: faker.company.companyName()
  })
  const co10 = await Company.create({
    name: faker.company.companyName()
  })
  const co11 = await Company.create({
    name: faker.company.companyName(),
    cityId: 1
  })
  const ep1 = await Employee.create({
    name: faker.name.firstName(),
    companyId: 2
  })
  const ep2 = await Employee.create({
    name: faker.name.firstName(),
    companyId: 1
  })
  const ep3 = await Employee.create({
    name: faker.name.firstName(),
    companyId: 3
  })
  const ep4 = await Employee.create({
    name: faker.name.firstName(),
    companyId: 4
  })
  const ep5 = await Employee.create({
    name: faker.name.firstName(),
    companyId: 6
  })
  const ep6 = await Employee.create({
    name: faker.name.firstName(),
    companyId: 7
  })
  const ep7 = await Employee.create({
    name: faker.name.firstName(),
    companyId: 9
  })
  const ep8 = await Employee.create({
    name: faker.name.firstName(),
    companyId: 10
  })
  const ct1 = await City.create({
    name: faker.address.cityName(),
    companyId: 2
  })
  const ct2 = await City.create({
    name: faker.address.cityName(),
    companyId: 3
  })
  const ct3 = await City.create({
    name: faker.address.cityName(),
    companyId: 5
  })
  const ct4 = await City.create({
    name: faker.address.cityName(),
    companyId: 2
  })
  const ct5 = await City.create({
    name: faker.address.cityName(),
    companyId: 8
  })
  const ct6 = await City.create({
    name: faker.address.cityName(),
    companyId: 1
  })
  const ct7 = await City.create({
    name: faker.address.cityName(),
    companyId: 7
  })
  const ct8 = await City.create({
    name: faker.address.cityName(),
    companyId: 4
  })
  const ct9 = await City.create({
    name: faker.address.cityName(),
    companyId: 6
  })
  const ct10 = await City.create({
    name: faker.address.cityName(),
    companyId: 11
  })
  const ct11 = await City.create({
    name: faker.address.cityName(),
    companyId: 10
  })
  const ct12 = await City.create({
    name: faker.address.cityName(),
    companyId: 9
  })
  const ct13 = await City.create({
    name: faker.address.cityName(),
    companyId: 5
  })
  const ct14 = await City.create({
    name: faker.address.cityName(),
    companyId: 7
  })
}

module.exports = { db, Company, Employee, City, seedDB };