"use strict";

function createLogger(prefix) {
  return function strLogger(message) {
    return `${prefix}:${message}`;
  };
}
const authLogger = createLogger("AUTH");
const apiLogger = createLogger("API");

console.log(authLogger("User logged in"));
console.log(apiLogger('Request failed'));