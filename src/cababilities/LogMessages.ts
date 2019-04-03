import { LogType, Log, makeLog } from '../data/Log';

interface LogMessages {
    log(log: Log): void;
}

function log(capability:LogMessages, logType: LogType, message:String): void {
    const log = makeLog(logType, message);
    capability.log(log);
}

class Logger {
    capability: LogMessages
    constructor(capability: LogMessages) {
        this.capability = capability
    }
    log(logType: LogType, message:String) {
        const log = makeLog(logType, message);
        this.capability.log(log);
    }
}

export { LogMessages, log, Logger }