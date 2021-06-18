const express = require('express');
const path = require('path');
const app = express();
const { db } = require('./db')

app.get('/', async(req, res, next) => {
  try{
    res.sendFile(path.join(__dirname, 'index.html'))
  }
  catch(err){
    next(err)
  }
})

const init = async() => {
  try{
    await db.sync();
    const port = 3000 || process.env.PORT;
    app.listen(port, () => console.log(`Listening on port ${port}`))
  }
  catch(err) {
    console.log(err);
  }
}
init();