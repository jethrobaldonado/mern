import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import Config from './config';
import router from './routes';

console.log(Config);
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', router);

app.listen(Config.port);