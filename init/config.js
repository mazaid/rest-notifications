var ServiceConfig = require('maf/Service/Config');

var configSchema = require('../config.schema.js');

module.exports = function (logger) {

    return new Promise((resolve, reject) => {

        var options = {
            configPath: '/data/etc/mazaid/notifications/config.json',

            consul: {
                key: 'services/mazaid/notifications',
                timeout: 1000
            },

            schema: configSchema
        };

        var config = new ServiceConfig(logger, options);

        config.load()
            .then(() => {
                var configObject = config.toObject();
                logger.debug('got config', configObject);
                resolve(configObject);
            })
            .catch((error) => {
                reject(error);
            });

    });

};
