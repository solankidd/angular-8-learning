let appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";

// config your local mongodb uri
appConfig.db = {
     uri: 'mongodb://127.0.0.1:27017/demoDB1',
}

module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db: appConfig.db,
}
