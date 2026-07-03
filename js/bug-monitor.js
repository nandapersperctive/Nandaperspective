/* Runtime bug monitor — catches JS errors on this page and keeps a local
   log so they surface immediately in the console instead of failing silently.
   Loaded first, before any other script, so it can catch errors from
   content files too. View the log any time with __bugLog() in DevTools. */
(function () {
    var STORAGE_KEY = "nandaBugLog";
    var MAX_ENTRIES = 50;
    var seen = {};

    function readLog() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        } catch (e) {
            return [];
        }
    }

    function writeLog(log) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(log.slice(-MAX_ENTRIES)));
        } catch (e) {
            /* storage unavailable (private mode, quota full) — skip persisting */
        }
    }

    function record(entry) {
        var key = entry.type + "|" + entry.message + "|" + entry.source + "|" + entry.line;
        if (seen[key]) return;
        seen[key] = true;

        entry.time = new Date().toISOString();
        entry.page = window.location.pathname + window.location.search;

        console.error("[BUG DETECTED]", entry.message, entry);

        var log = readLog();
        log.push(entry);
        writeLog(log);
    }

    window.addEventListener("error", function (event) {
        record({
            type: "error",
            message: event.message || "Unknown script error",
            source: event.filename || "",
            line: event.lineno || 0,
            col: event.colno || 0,
            stack: event.error && event.error.stack ? event.error.stack : ""
        });
    });

    window.addEventListener("unhandledrejection", function (event) {
        var reason = event.reason;
        record({
            type: "unhandledrejection",
            message: reason && reason.message ? reason.message : String(reason),
            source: "",
            line: 0,
            col: 0,
            stack: reason && reason.stack ? reason.stack : ""
        });
    });

    window.__bugLog = function () {
        var log = readLog();
        console.table(log);
        return log;
    };

    window.__clearBugLog = function () {
        localStorage.removeItem(STORAGE_KEY);
        console.info("Bug log cleared.");
    };
})();
