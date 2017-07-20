module.exports = {
    clean: function (successCallback, errorCallback) {
        successCallback("test");
    }
};
require("cordova/exec/proxy").add("INetCacheCleaner", module.exports);