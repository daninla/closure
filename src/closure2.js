"use strict";

function createLimiter(limit) {
  if (!Number.isFinite(limit)) {
    throw new Error("NOT A NUMBER");
  }
  return function () {
    if (limit <= 0) {
      console.log("ERROR");
    } else {
      console.log("OK");
    }
    return limit--;
  };
}

try {
  const limited2 = createLimiter(3);
  limited2();
  limited2();
  limited2();
  limited2();
  const limited = createLimiter("");
  limited();
  limited();
  limited();
} catch (e) {
  console.log(e.message);
}
