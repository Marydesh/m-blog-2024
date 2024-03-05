const path = require('path');
const express = require('express');
const routes = require('./controllers');
const session = require('express-session');
const handlebars = require('express-handlebars')
const helpers = require('./utils/helpers');
// import sequelize connection

const sequelize = require('./config/connection.js')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = handlebars.create({ helpers });
const app = express();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.static('public'))
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 3000000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));

// debug middleware
app.use((req, res, next) => {
  console.log(`${req.method} request heard at ${req.url}`)
  next()
})
//

app.use(routes);

// sync sequelize models to the database, then turn on the server
// start()
// async function start() {
//   try {
//     await sequelize.sync({ alter: true })
//     console.log('Connected to database')
//     app.listen(PORT, () => {
//       console.log(`App listening on port ${PORT}!`);
//     });
//   } catch (error) {
//     console.log("Failed connecting to database")
//     console.log(error)
//   }
// };

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
}).catch((err)=>{
  console.log(`Failed connecting to database:`, err)
})