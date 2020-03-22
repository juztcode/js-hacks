var ConsoleToHTML = function (elementId) {
    var log = console.log;
    var info = console.info;
    var warn = console.warn;
    var debug = console.debug;
    var error = console.error;
    var clear = console.clear;

    console.log = function () {
        var args = Array.prototype.slice.call(arguments);
        var concatenatedString = concatStrings(args);
        log.apply(console, args);
        appendToElement('<p>' + '[log] ' + concatenatedString + '</p>');
    };

    console.info = function () {
        var args = Array.prototype.slice.call(arguments);
        var concatenatedString = concatStrings(args);
        info.apply(console, args);
        appendToElement('<p>' + '[info] ' + concatenatedString + '</p>');
    };

    console.debug = function () {
        var args = Array.prototype.slice.call(arguments);
        var concatenatedString = concatStrings(args);
        debug.apply(console, args);
        appendToElement('<p>' + '[debug] ' + concatenatedString + '</p>');
    };

    console.warn = function () {
        var args = Array.prototype.slice.call(arguments);
        var concatenatedString = concatStrings(args);
        warn.apply(console, args);
        appendToElement('<p style="color: yellow">' + '[warn] ' + +concatenatedString + '</p>');
    };

    console.error = function () {
        var args = Array.prototype.slice.call(arguments);
        var concatenatedString = concatStrings(args);
        error.apply(console, args);
        appendToElement('<p style="color: red">' + '[error] ' + concatenatedString + '</p>');
    };

    console.clear = function () {
        clear();
        clearElement();
    };

    var concatStrings = function (args) {
        var result = '';

        for (var i in args) {
            var arg = args[i];
            if (typeof arg === 'object') {
                result += ' ' + JSON.stringify(arg);
            } else {
                result += ' ' + arg;
            }
        }

        return result;
    };

    var appendToElement = function (htmlString) {
        var element = document.getElementById(elementId);
        element.insertAdjacentHTML('beforeend', htmlString);
        element.scrollTop = element.lastChild.offsetTop;
    };

    var clearElement = function () {
        var element = document.getElementById(elementId);
        element.innerHTML = '';
    };
};
