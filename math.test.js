const math = require("./math.js");

//3 create tests for reqs

describe("the math module", () => {
  describe("the add function", () => {
    test("adds two numbers", () => {
      //assertion statement(s)
      expect(math.add(3, 5)).toEqual(8);
      expect(math.add(2, -3)).toEqual(-1);
      expect(math.add(1.2, 3.1)).toEqual(4.3);
    });

    // test("converts numerical strs", () => {
    //   expect(math.add("3", "2")).toEqual(5);
    // });

    // test("returns NaN for non numerical input", () => {
    //   expect(math.add("a", "b")).toBeNaN();
    //   expect(math.add([1, 2, 3], [4, 5, 6])).toBeNaN();
    // });

    test("throws err on non number", () => {
      expect(() => {
        math.add('2', '3')
      }).toThrow()
      expect(() => {
        math.add([], 3)
      }).toThrow()
    })
  });

  describe("the subtract function", () => {
    test("subtracts two numbers", () => {
      //assertion statement(s)
      expect(math.subtract(4, 2)).toEqual(2);
      expect(math.subtract(3, 5)).toEqual(-2);
      expect(math.subtract(2, -3)).toEqual(5);
      expect(math.subtract(3.1, 1.1)).toEqual(2);
    });

    test("converts numerical strs", () => {
      expect(math.subtract("3", "2")).toEqual(1);
    });

    test("returns NaN for non numerical input", () => {
      expect(math.subtract("a", "b")).toBeNaN();
      expect(math.subtract([1, 2, 3], [4, 5, 6])).toBeNaN();
    });
  });
});

test('to be vs to equal', () => {
  //toBe doesn't work very well with objects, arrays, non-primitive data types
  expect(3).toBe(3);
  expect([1,2]).toEqual([1,2]);
})
