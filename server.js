import express from 'express';

import { APP_PORT, APP_URL } from './config';
 import errorHandler from './middlewares/errorHandler';
import routes from './routes/index';
import path from 'path';
import connectDB from './config/db.config';


const app = express();
app.use(routes);



var corsOptions={
    origin: APP_URL
};


//setting view engine

app.set('view engine','ejs');

app.use(express.json());
///create global support app root path
global.appRoot = path.resolve(__dirname);
app.use(express.urlencoded({ extended: false }));
//for json response to the user
app.use(express.json());
//let express know upload folder contain images and can be display as url
app.use('/public', express.static('public'));



///error handler useing
app.use(errorHandler);

app.listen(process.env.PORT || APP_PORT, () => console.log(`listening on port ${APP_PORT}.`));