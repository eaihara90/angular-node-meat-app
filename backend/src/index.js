const http = require('http');
const mongoose = require('mongoose');
const environment = require('./environment');
const app = require('./app');

const server = http.Server(app);

mongoose.createConnection(environment.uriDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.listen(environment.PORT, () => console.log(`[SERVER] Listening on port ${environment.PORT}`));



