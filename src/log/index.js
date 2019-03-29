//const colors = require('colors');

const LOG_LEVEL = {
    TRACE: "TRACE",
    DEBUG: "DEBUG",
    INFO: "INFO",
    WARN: "WARN",
    ERROR: "ERROR",
    FATAL: "FATAL",
};

function log(logLevel, message) {
    let time = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    let logMessage = time + '  ' + logLevel + '\t' + message;

    switch (logLevel) {
        case LOG_LEVEL.TRACE:
            console.log(logMessage);
            break;
        case LOG_LEVEL.DEBUG:
            //console.log(logMessage.cyan);
            console.log(logMessage);
            break;
        case LOG_LEVEL.INFO:
        //    console.log(logMessage.green);
            console.log(logMessage);
        break;
        case LOG_LEVEL.WARN:
            console.warn(logMessage);
            break;
        case LOG_LEVEL.ERROR:
            console.error(logMessage);
            break;
        case LOG_LEVEL.FATAL:
//            console.log(logMessage.red);
            console.error(logMessage);
        break;

        default:
            console.log(logMessage);
            break;
    }
}

const loggerAPI = {
    // For filtering
    setLevel(level) {
        throw new Error('logAPI.setLevel: not implemented yet :(');
    },
    trace(message) {
        log(LOG_LEVEL.TRACE, message);
    },
    debug(message) {
        log(LOG_LEVEL.DEBUG, message);
    },
    info(message) {
        log(LOG_LEVEL.INFO, message);
    },
    warn(message) {
        log(LOG_LEVEL.WARN, message);
    },
    error(message) {
        log(LOG_LEVEL.ERROR, message);
    },
    fatal(message) {
        log(LOG_LEVEL.FATAL, message);
    }
};

export default loggerAPI;
