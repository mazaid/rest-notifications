module.exports = (config, models, di) => {

    return new Promise((resolve, reject) => {

        var A = {
            Telegram: require('./Telegram')
        };

        var api = {};

        api.telegram = new A.Telegram(di.logger, config.backends.telegram);

        for (var name in api) {
            if (di.debug && api[name].setDebugger) {
                api[name].setDebugger(di.debug);
            }
        }

        api.createTest = () => {

            return new Promise((resolve, reject) => {
                resolve();
            });

        };

        resolve(api);
    });

};
