const ConsoleSuspend = function (list) {
  const log = console.log;
  const info = console.info;
  const warn = console.warn;
  const debug = console.debug;
  const error = console.error;

  const isValid = function (args) {
    const s = args[0];

    for (const i of list) {
      const type = typeof s;
      if (type === 'string' && s.startsWith(i)) {
        return false;
      }
    }

    return true;
  };

  console.log = function () {
    const args = Array.prototype.slice.call(arguments);

    if (isValid(args)) {
      log.apply(console, args);
    }
  };

  console.info = function () {
    const args = Array.prototype.slice.call(arguments);

    if (isValid(args)) {
      info.apply(console, args);
    }
  };

  console.debug = function () {
    const args = Array.prototype.slice.call(arguments);

    if (isValid(args)) {
      debug.apply(console, args);
    }
  };

  console.warn = function () {
    const args = Array.prototype.slice.call(arguments);

    if (isValid(args)) {
      warn.apply(console, args);
    }
  };

  console.error = function () {
    const args = Array.prototype.slice.call(arguments);

    if (isValid(args)) {
      error.apply(console, args);
    }
  };
};
