const express = require('express');
const routes = require('./routes');
const handlebars = require('express-handlebars')
// import sequelize connection

const sequelize = require('./config/connection.js')

const app = express();
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
start()
async function start() {
  try {
    await sequelize.sync({ alter: true })
    console.log('Connected to database')
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (error) {
    console.log("Failed connecting to database")
    console.log(error)
  }
}