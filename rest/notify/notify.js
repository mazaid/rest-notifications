var joi = require('joi');
var _ = require('lodash');

module.exports = {

    resource: '/notify/:checkId',

    title: 'notify about check status',

    methods: {
        POST: {
            title: 'notify about check status',

            schema: {
                path: {
                    ':checkId': joi.string().required()
                },
                body: {
                    message: joi.string().required()
                }
            },

            callback: function (req, res) {
                var api = req.di.api;
                api.telegram.send(req.body.message)
                    .then(() => {
                        res.result(true);
                    })
                    .catch((error) => {
                        res.logServerError(error);
                    });
            }
        }

    }
};
