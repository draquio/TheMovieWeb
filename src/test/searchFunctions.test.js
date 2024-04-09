import { createQueryFromPath, createSearchPath } from "../utils/searchFunction";

describe("Testing createSearchPath function", () => {
  test("it should return the path ", () => {
    const data = createSearchPath("This is a test 123");
    expect(data).toBe("This+is+a+test+123");
  });
  test("it should return empty text if an empty input is provided", () => {
    const data = createSearchPath("");
    expect(data).toBe("");
  });
  test("it should return empty text if no one data is provided", () => {
    const data = createSearchPath();
    expect(data).toBe("");
  });
  test("it should return empty text if a null input is provided", () => {
    const data = createSearchPath(null);
    expect(data).toBe("");
  });
  test("it should return empty text if a number input is provided", () => {
    const data = createSearchPath(123);
    expect(data).toBe("");
  });
});


describe("Testing createQueryFromPath function", () => {
    test("it should return the text converted from path ", () => {
        const data = createQueryFromPath("This+is+a+test+123");
        expect(data).toBe("This is a test 123");
      });
      test("it should return empty text if an empty input is provided", () => {
        const data = createQueryFromPath("");
        expect(data).toBe("");
      });
      test("it should return empty text if no one data is provided", () => {
        const data = createQueryFromPath();
        expect(data).toBe("");
      });
      test("it should return empty text if a null input is provided", () => {
        const data = createQueryFromPath(null);
        expect(data).toBe("");
      });
      test("it should return empty text if a number input is provided", () => {
        const data = createQueryFromPath(123);
        expect(data).toBe("");
      });
})