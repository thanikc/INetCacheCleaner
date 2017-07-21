module.exports = {
    clean: function (successCallback, errorCallback) {
        var res = INetCacheCleaner.Cleaner.clean();
        successCallback(res);
    }
};
require("cordova/exec/proxy").add("INetCacheCleaner", module.exports);