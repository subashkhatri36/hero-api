import express from 'express';

import { APP_PORT, DB_URL } from './config';
 import errorHandler from './middlewares/errorHandler';
import routes from './routes';
import path from 'path';


const app = express();

// ///mongoose databse connection
// mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// //defining databse connection into db
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error;'));
// db.once('open', () => {
//     console.log('DB connected');
// });

///create global support app root path
global.appRoot = path.resolve(__dirname);
app.use(express.urlencoded({ extended: false }));
//for json response to the user
app.use(express.json());
//using api / as endpoint
app.use('/api', routes);
//let express know upload folder contain images and can be display as url
app.use('/uploads', express.static('uploads'));


///error handler useing
app.use(errorHandler);

app.listen(process.env.PORT || APP_PORT, () => console.log(`listening on port ${APP_PORT}.`));