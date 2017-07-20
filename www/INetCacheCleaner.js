var exec = require('cordova/exec');

var INetCacheCleaner = {
    clean: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "INetCacheCleaner", "clean", []);
    }
}
module.exports = INetCacheCleaner;
