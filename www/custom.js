/**
 * Cordova Template Plugin
 */

/**
 * 
 * exec(callback, errorCallback, pluginName, actionName, argumentArray)
 * callback 插件成功返回时调用，并将本机插件中的任何参数传递给它
 * errorCallback在插件遇到错误时调用。我们在上面省略了这一点
 * pluginName 是本机端的插件类名称。
 * actionName 是我们将在本机方面执行的操作。
 * argumentArray 是传递给本机端的参数数组
 */


// prototype 屬於是為class 添加方法/屬於用到的
var exec = require('cordova/exec'),
    cordova = require('cordova'),
    channel = require('cordova/channel'),
    PositionError = require('./PositionError'),   // 引用本地js
    utils = require('cordova/utils');

var Custom = (function () {

    var platformId = cordova.platformId;  // 'android' 'ios'
    var code = PositionError.TIMEOUT;

    function Custom() {
        console.log("platformId: " + platformId + code);
    }

    Custom.prototype.echo = function (echoValue, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'cordova.plugins.custom', 'echo', [echoValue]);
    };


    Custom.prototype.openUrl = function (params, success, error) {
        exec(success, error, 'cordova.plugins.custom', 'openUrl', [params]);
    };

    return Custom;

})();



var custom = new Custom();
module.exports = custom;