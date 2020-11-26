const http = require('http');
const mongoose = require('mongoose');
const environment = require('./environment');
const app = require('./app');

const server = http.Server(app);

const startCore = async() => {
    await mongoose.connect(environment.uriDb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    server.listen(environment.PORT, () => console.log(`[SERVER] Listening on port ${environment.PORT}`));
}

startCore();