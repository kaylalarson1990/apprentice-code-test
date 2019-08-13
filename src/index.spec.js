import { assert } from "chai";
import {
  add,
  subtract,
  divide,
  multiply,
  areSameLength,
  areEqual,
  isEven,
  isOdd,
  roundNumber
} from "./index";

describe("Math Functions", () => {
  describe("add", () => {
    //The following tests all pass great!
    it("should be a function", () => {
      assert.isFunction(add);
    });
    it("should return a number", () => {
      assert.isNumber(add(2, 3));
    });
    it("should properly add two numbers", () => {
      assert.equal(add(2, 3), 5);
    });
  });

  describe("subtract", () => {
    it("should be a function", () => {
      assert.isFunction(subtract);
    });
    it("should return a number", () => {
      assert.isNumber(subtract(3, 2));
    });
    it("should properly subtract two numbers", () => {
      assert.equal(subtract(3, 2), 1);
    });
  });

  describe("divide", () => {
    it("should be a function", () => {
      assert.isFunction(divide);
    });
    it("should return a number", () => {
      assert.isNumber(divide(10, 2));
    });
    it("should return Infinity if we divide by 0", () => {
      assert.equal(divide(5, 0), Infinity);
    });
  });

  describe("multiply", () => {
    it("should be a function", () => {
      assert.isFunction(multiply);
    });
    it("should return a number", () => {
      assert.isNumber(multiply(3, 2));
    });
    it("should properly multiply two numbers", () => {
      assert.equal(multiply(3, 2), 6);
    });
  });

  describe("areSameLength", () => {
    it("should be a function", () => {
      assert.isFunction(areSameLength, "array");
    });
    it("should return a boolean", () => {
      assert.equal(areSameLength("hello", "world"), true);
    });
    it("should return true if both strings are the same length", () => {
      assert.isTrue(areSameLength("hello", "world"), true);
    });
    it("should return false if strings have different lengths", () => {
      assert.isFalse(areSameLength("hello", "goodbye"), false);
    });
  });

  describe("areEqual", () => {
    it("should be a function", () => {
      assert.isFunction(areEqual);
    });
    it("should return a boolean", () => {
      assert.equal(areEqual("hello", "world"), false);
    });
    it("should return true if both numbers are the same", () => {
      assert.isTrue(areEqual(2, 2), true);
    });
    it("should return false if the numbers are different", () => {
      assert.isFalse(areEqual(1, 2), false);
    });
  });

  describe("isEven", () => {
    it("should be a function", () => {
      assert.isFunction(isEven);
    });
    it("should return a boolean", () => {
      assert.equal(areEqual("hello", "world"), false);
    });
    it("should return true if number is even", () => {
      assert.isTrue(isEven(2), true);
    });
    it("should return false if a number is odd", () => {
      assert.isFalse(isEven(3), false);
    });
  });

  describe("isOdd", () => {
    it("should be a function", () => {
      assert.isFunction(isOdd);
    });
    it("should return a boolean", () => {
      assert.equal(isOdd("hello", "world"), true);
    });
    it("should return false if the number is even", () => {
      assert.isFalse(isOdd(2), false);
    });
    it("should return true if a number is odd", () => {
      assert.isTrue(isOdd(3), true);
    });
  });

  describe("roundNumber", () => {
    it("should be a function", () => {
      assert.isFunction(roundNumber);
    });
    it("should return a number", () => {
      assert.isNumber(roundNumber(0.2));
    });
    it("should round up when needed", () => {
      assert.equal(roundNumber(1), 1);
    });
    it("should round down when needed", () => {
      assert.equal(roundNumber(0.4), 0);
    });
  });
});
