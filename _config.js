var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://Joseph:12345@testcluster.1djsdy4.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://Joseph:12345@testcluster.1djsdy4.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://Joseph:12345@testcluster.1djsdy4.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;


mongodb+srv://Joseph:<password>@testcluster.1djsdy4.mongodb.net/?retryWrites=true&w=majority