import express from 'express';
import config from 'config';
import chalk from 'chalk';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const PORT = config.get('port') ?? 8080;

// if(process.env.NODE_ENV === 'production') {
//   console.log('Production');
// }else {
//   console.log('Development');
// }

async function startApp() {
  try {
    await mongoose.connect(config.get('mongoUri'));
    console.log(chalk.bgGreenBright('MongoDB connected OK!'));
    app.listen(PORT, () => {
      console.log(chalk.blue(`Server started on port ${PORT}...`));
    })
  } catch (error) {
    console.log(chalk.red(error.message));
    process.exit(1)
  }
};

startApp();