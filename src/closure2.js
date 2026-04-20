"use strict";

function createLimiter(limit) {
  if (!Number.isFinite(limit)) return null;
  return function () {
    if (limit <= 0) {
      console.log("ERROR");
    } else {
      console.log("OK");
    }
    return limit--;
  };
}

const limited = createLimiter(2);
limited();
limited();
limited();
limited();
limited();
limited();
limited();

console.log('--------------------------------------------')

const limited2 = createLimiter(4);
limited2();
limited2();
limited2();
limited2();
limited2();
limited2();
limited2();
