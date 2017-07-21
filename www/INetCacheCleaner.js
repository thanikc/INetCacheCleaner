var exec = require('cordova/exec');

var INetCacheCleaner = {
    clean: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "INetCacheCleaner", "clean", []);
    },
    devNullSymLink: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "INetCacheCleaner", "devNullSymLink", []);
    }
}
module.exports = INetCacheCleaner;
