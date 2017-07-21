module.exports = {
    clean: function (successCallback, errorCallback) {
        var res = INetCacheCleanerRuntimeComponent.INetCacheCleanerPluginRT.clean();
        successCallback(res);
    }
};
require("cordova/exec/proxy").add("INetCacheCleaner", module.exports);