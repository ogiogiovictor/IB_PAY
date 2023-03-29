// require http module
const fs = require('fs');
const https = require('https');


// Require app the backbone project file
const app = require('./app');

const PORT = process.env.PORT || 8000;

// Create server and bootstrap the app
async function startServer() {

    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

// Create server and bootstrap the app
startServer();
