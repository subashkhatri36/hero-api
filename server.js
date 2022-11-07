import express from 'express';

import { APP_PORT, APP_URL } from './config';
import path from 'path';
import connectDB from './config/db.config';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { graphql } from 'graphql';




const app = express();

var corsOptions={
    origin: APP_URL
};




///create global support app root path
global.appRoot = path.resolve(__dirname);
app.use(express.urlencoded({ extended: false }));
//for json response to the user
app.use(express.json());


app.listen(process.env.PORT || APP_PORT, () => console.log(`listening on port ${APP_PORT}.`));