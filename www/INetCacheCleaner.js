var INetCacheCleaner = {
    clean: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "INetCacheCleaner", "clean");
    }
}

window.clean = function(callback) {
    cordova.exec(callback, function(err) {
        callback('Error?');
    }, "Clean", "clean");
};