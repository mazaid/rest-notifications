'use strict';

var request = require('superagent');

class Telegram {

    constructor(logger, config) {
        this._logger = logger;
        this._config = config;
    }

    send(message) {

        return new Promise((resolve, reject) => {
            request.post('https://api.telegram.org/bot' + this._config.token + '/sendMessage')
                .send({
                    chat_id: this._config.to,
                    text: message
                })
                .then(() => {
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        });

    }

}

module.exports = Telegram;
