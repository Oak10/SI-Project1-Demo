const log4js = require('log4js');

log4js.configure({
    appenders: { app1: { type: 'console' } },
    categories: { default: { appenders: ['app1'], level: 'info' } }
});

const logger = log4js.getLogger('app1');

const logMessage = process.env.LOG_MESSAGE || 'Hello from app 1';

setInterval(() => {
    logger.info(logMessage);
}, 5000);
