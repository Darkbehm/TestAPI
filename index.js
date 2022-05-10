const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routers/api');
const app = express();
const cors = require('cors');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));


const allowedOrigins = [
    'http://localhost:3000',
];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    },
};

// Enable preflight requests for all routes
app.options('*', cors(corsOptions));


app.use('/api', cors(corsOptions), apiRouter);

app.listen(3001, () => {
    console.log('Server en puerto 3001');
});
