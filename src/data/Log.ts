enum LogType {
    Debug,
    Info,
    Error,
}

interface Log {
    type: LogType;
    message: String;
}

function makeLog(logType: LogType, message: String): Log {
    function headerWith(start: String):String {
      return '[' + start + '] ' + message
    }
    function formattedLog(logType: LogType): String {
        switch (logType) {
            case LogType.Debug: {
               return headerWith('Debug');
            }
            case LogType.Info: {
                return headerWith('Info');
            }
            default: {
               return headerWith('Error');
            }
         }
    }
    var log: Log = <any>{};
    log.type = logType;
    log.message = formattedLog(logType);
    return log;
}

export { LogType, Log, makeLog }