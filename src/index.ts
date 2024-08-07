import * as dotenv from 'dotenv';

import express from 'express';
import mongoose from 'mongoose';

import router from './router';

const cors = require('cors');

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: '*',
        credentials: true, //access-control-allow-credentials:true
        optionSuccessStatus: 200,
    })
);
app.use('/api', router);

dotenv.config();

startApp();

async function startApp() {
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log('Mongodb connected');

        app.listen(process.env.SERVER_PORT, () =>
            console.log(`Server started on port: ${process.env.SERVER_PORT}`)
        );
    } catch (err) {
        console.log(err);
    }
}
