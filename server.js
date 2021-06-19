const express = require('express');
const path = require('path');
const app = express();
const { db, Company, Employee, City, seedDB } = require('./db');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async(req, res, next) => {
  try{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  }
  catch(err){
    next(err)
  }
})

app.get('/api/companies', async(req, res, next) => {
  try{
    const companyList = await Company.findAll();
    res.send(companyList)
  }
  catch(err){
    next(err)
  }
})
app.get('/api/cities/:companyId', async(req, res, next) => {
  try{
    const companyList = await Company.findAll();
    const cityList = await City.findAll({
      include: Company
    });
    res.send(cityList)
  }
  catch(err){
    next(err)
  }
})
app.get('/api/employees/:companyId', async(req, res, next) => {
  try{
    const companyList = await Company.findAll();
    const employeeList = await Employee.findAll({
      where: {
        companyId: req.params.companyId
      }
    });
    res.send(employeeList)
  }
  catch(err){
    next(err)
  }
})

const init = async() => {
  try{
    await db.sync({force: true});;
    await seedDB()
    const port = 3000 || process.env.PORT;
    app.listen(port, () => console.log(`Listening on port ${port}`))
  }
  catch(err) {
    console.log(err);
  }
}
init();