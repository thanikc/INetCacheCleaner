var INetCacheCleaner = {
    clean: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "INetCacheCleaner", "clean", []);
    }
}

module.exports = INetCacheCleaner;