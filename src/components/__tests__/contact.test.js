import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page test cases", () => {
//   beforeAll(() => {
//     console.log("before all test cases");
//   });

//   beforeEach(() => {
//     console.log("before each test case");
//   });
//   afterEach(() => {
//     console.log("after each test case");
//   });
//   afterAll(() => {
//     console.log("after all test cases");
//   });

  test("should load component contact us", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact component", () => {
    render(<Contact />);

    //querying
    const button = screen.getByRole("button");

    //assertion
    expect(button).toBeInTheDocument();
  });

  test("should load button inside contact component", () => {
    render(<Contact />);

    //querying
    const inputText = screen.getAllByRole("textbox");

    //assertion
    expect(inputText.length).toBe(2);
  });
});

//to test you should be first render something then querying something and then assert something
// //somtime our test cases increases and it is difficut to mange so we can group test cases to mange effectively usinng describe
// we can write multiple decribe boxes and we also write describe inside describe
//we can also it instead to test (it and test is one in the same thing)
//testing a component in an isolation this is called unit testing
