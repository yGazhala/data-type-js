var dataType = (function(){
    "use strict";

    var getType,
        isUndefined,
        isNull,
        isNumber,
        isBoolean,
        isString,
        isFunction,
        isArray,
        isObject,
        isDate;

    var	toStr = Object.prototype.toString; // helper

    // this method returns string with one of next desription:
    // "Array", "Object", "Date", "Function", "String", "Boolean",
    // "Number", "Null" or "Undefined".
    getType = function(arg) {
        return toStr.call(arg).slice(8, -1);
    };

    // next methods return true or false
    isUndefined = function(arg) {
        return typeof arg === "undefined";
    };

    isNull = function(arg) {
        return toStr.call(arg) === "[object Null]";
    };

    // this method checks if number is not empty string,
    // boolean true/false expression, NaN or Infinity.
    // isNumber("1.5"); // true
    // isNumber(1.5); // true
    // everything else - false
    isNumber = function(arg) {
        return !isNaN(parseFloat(arg)) && isFinite(arg);
    };

    isBoolean = function(arg) {
        return typeof arg === "boolean";
    };

    isString = function(arg) {
        return typeof arg === "string";
    };

    isFunction = function(arg) {
        return typeof arg === "function";
    };

    isArray = function(arg) {
        if (!Array.isArray) { // IE 8 and less
            Array.isArray = function(arg) {
                return toStr.call(arg) === "[object Array]";
            };
        }
        return Array.isArray(arg); // other browser
    };

    isObject = function(arg) {
        return toStr.call(arg) === "[object Object]";
    };

    isDate = function(arg) {
        return toStr.call(arg) === "[object Date]";
    };

    // Interface
    return {
        getType: getType,
        isUndef: isUndefined,
        isNull: isNull,
        isNum: isNumber,
        isBool: isBoolean,
        isStr: isString,
        isFunc: isFunction,
        isArr: isArray,
        isObj: isObject,
        isDate: isDate
    }
})();
