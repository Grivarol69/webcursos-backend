import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import router from './routes/index.js';

dotenv.config();

const server = express();

server.use(morgan('dev'));
server.use(express.json());

// Routing

server.use('/', router);

export default server;