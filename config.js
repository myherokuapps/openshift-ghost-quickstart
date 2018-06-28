// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;
var config;
    config = {
        // ### Production
        // When running Ghost in the wild, use the production environment
        // Configure your URL and mail settings here
        production: {
            url: 'http://'+process.env.OPENSHIFT_APP_DNS,
            mail: {},
            database: {
                client: 'sqlite3',
                connection: {
                    filename: path.join(__dirname, '/content/data/ghost-dev.db')
                },
                debug: false
            },
            server: {
                // Host to be passed to node's `net.Server#listen()`
                host: process.env.OPENSHIFT_NODEJS_IP,
                // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
                port: process.env.OPENSHIFT_NODEJS_PORT
            },
            paths: {
                contentPath: path.join(__dirname, '/content/')
            }
        }
    }
  

        // **Developers only need to edit below here**

        // ### Testing
        // Used when developing Ghost to run tests and check the health of Ghost
        // Uses a different port number
        

// Export config
module.exports = config;
