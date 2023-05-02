// require http module
const fs = require('fs');
const http = require('http');


// Require app the backbone project file
const app = require('./app');
const { mongoConnect } = require('../services/mongo');

const PORT = process.env.PORT || 8002;

const server = http.createServer(app);

// Create server and bootstrap the app
async function startServer() {

    await mongoConnect();
    
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

// Create server and bootstrap the app
startServer();
