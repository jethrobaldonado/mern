import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import Config from './config';
import router from './routes';
import db from './models';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', router);

db.mongoose
  .connect(`mongodb://${Config.dbHost}:${Config.dbPort}/${Config.dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Successfully connected');
  })
  .catch((err) => {
    console.log('Connection error, ', err);
    process.exit;
  })



app.listen(Config.port);