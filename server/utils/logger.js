'use strict';

const winston = require('winston'); // Winston default npm levels: { emerg: 0, alert: 1, crit: 2, error: 3, warning: 4, notice: 5, info: 6, debug: 7 }

const tsFormat = () => new Date().toLocaleTimeString();
const logger = winston.createLogger({
    transports: [
        // colorize the output to the console
        new winston.transports.Console({
            level: 'debug',
            timestamp: tsFormat,
            colorize: true,
        }),
    ],
});

// logger.cli(); //todo: implement custom formatter in winston (see: https://github.com/winstonjs/winston/blob/master/UPGRADE-3.0.md#upgrading-to-winstonformat) - reg.

module.exports = logger;
