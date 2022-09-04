const express = require('express');
const config = require('config');
const cors = require('cors');
const chalk = require('chalk');
const mongoose = require('mongoose');
const initDataBase = require('./startInitDB/initDataBase');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

const PORT = config.get('port') ?? 8080;

// if(process.env.NODE_ENV === 'production') {
//   console.log('Production');
// }else {
//   console.log('Development');
// }

async function startApp() {
  try {
    mongoose.connection.once('open', () => {
      initDataBase();
    });
    await mongoose.connect(config.get('mongoUri'));
    console.log(chalk.bgGreenBright('MongoDB connected OK!'));
    app.listen(PORT, () => {
      console.log(chalk.blue(`Server started on port ${PORT}...`));
    });
  } catch (error) {
    console.log(chalk.red(error.message));
    process.exit(1);
  }
}

startApp();
