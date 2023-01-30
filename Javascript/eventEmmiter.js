export default function EventEmitter() {
  // Creating objects via {} will include unwanted properties
  // on the prototype (such as `.toString`).
  this.events = Object.create(null);
}

EventEmitter.prototype.on = function (eventName, listener) {
  if (!(eventName in this.events)) {
    this.events[eventName] = [];
  }

  this.events[eventName].push(listener);
  return this;
};

EventEmitter.prototype.off = function (eventName, listener) {
  // Ignore non-existing eventNames.
  if (!(eventName in this.events)) {
    return this;
  }

  const listeners = this.events[eventName];

  // Find only first instance of the listener.
  const index = listeners.findIndex(
    (listenerItem) => listenerItem === listener
  );
  if (index < 0) {
    return this;
  }

  this.events[eventName].splice(index, 1);
  return this;
};

EventEmitter.prototype.emit = function (eventName, ...args) {
  // Return false for non-existing eventNames or events without listeners.
  if (!(eventName in this.events) || this.events[eventName].length === 0) {
    return false;
  }

  // Make a clone of the listeners in case one of the listeners
  // mutates this listener array.
  const listeners = this.events[eventName].slice();
  listeners.forEach((listener) => {
    listener.apply(null, args);
  });

  return true;
};

const emitter = new EventEmitter();

function addTwoNumbers(a, b) {
  console.log(`The sum is ${a + b}`);
}
emitter.on("foo", addTwoNumbers);
emitter.emit("foo", 2, 5);
// > "The sum is 7"

emitter.on("foo", (a, b) => console.log(`The product is ${a * b}`));
emitter.emit("foo", 4, 5);
// > "The sum is 9"
// > "The product is 20"

emitter.off("foo", addTwoNumbers);
emitter.emit("foo", -3, 9);
// > "The product is -27"
