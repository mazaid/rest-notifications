var joi = require('joi');

var config = {
    host: 'localhost',
    port: 8085,

    db: {
        dsl: 'mongodb://localhost:27017/mazaid'
    },

    nprof: {
        snapshotPath: '/data/tmp/mazaid/notifications'
    },

    backends: {
        telegram: {
            token: null,
            to: null
        }
    }
};

module.exports = {
    host: joi.string().allow(null).default(config.host),
    port: joi.number().default(config.port),

    db: joi.object().default(config.db).keys({
        dsl: joi.string().default(config.db.dsl)
    }),

    nprof: joi.object().default(config.nprof).keys({
        snapshotPath: joi.string().default(config.nprof.snapshotPath)
    }),

    backends: joi.object().required().keys({
        telegram: joi.object().keys({
            token: joi.string().required(),
            to: joi.string().required()
        })
    })
};
