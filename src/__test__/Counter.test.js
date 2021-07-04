import React from "react";
import { Counter } from "../components/Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
  // const component=render(<Counter/>)
  // const headerEl= component.getByTestId("header")
  const { getByTestId } = render(<Counter />);
  const headerEl = getByTestId("header");
  expect(headerEl.textContent).toBe("My Counter");
});

test("counter initially starts with text of 0", () => {
  const { getByTestId } = render(<Counter></Counter>);
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");
  expect(inputEl.value).toBe("1");
});

test("add button renders with +", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId("addBtn");
  expect(addBtn.textContent).toBe("+");
});

test("subtract button renders with -", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtn = getByTestId("subtract-btn");
  expect(subtractBtn.textContent).toBe("-");
});

test("change value of input works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");
  expect(inputEl.value).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: 5,
    },
  });
  expect(inputEl.value).toBe("5");
});

test("clicking on plus btn adds 1 to counter", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId("addBtn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe("1");
});

test("clicking on subtract btn subtracts 1 from counter", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(subtractBtnEl);
  expect(counterEl.textContent).toBe("-1");
});

test("changing input value then clicking on add btn works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId("addBtn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  expect(counterEl.textContent).toBe("0");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe("5");
});

test("changing input value then clicking on subtract btn works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  expect(counterEl.textContent).toBe("0");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(subtractBtnEl);
  expect(counterEl.textContent).toBe("-5");
});

test("adding and then subtracting leads to correct counter number", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEl = getByTestId("subtract-btn");
  const addBtnEl = getByTestId("addBtn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: 10,
    },
  });
  for (let i = 1; i <= 4; i++) {
    fireEvent.click(addBtnEl);
  }
  for (let i = 1; i <= 2; i++) {
    fireEvent.click(subtractBtnEl);
  }
  expect(counterEl.textContent).toBe("20");
  fireEvent.change(inputEl, {
    target: {
      value: 5,
    },
  });

  fireEvent.click(addBtnEl);

  for (let i = 1; i <= 2; i++) {
    fireEvent.click(subtractBtnEl);
  }
  expect(counterEl.textContent).toBe("15");
});

test("counter contains correct calssName", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId("counter");
  expect(counterEl.className).toBe("");
  const inputEl = getByTestId("input");
  const subtractBtnEl = getByTestId("subtract-btn");
  const addBtnEl = getByTestId("addBtn");
  fireEvent.change(inputEl, {
    target: {
      value: "50",
    },
  });
  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe("");
  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe("green");
  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe("green");
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  expect(counterEl.className).toBe("");
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  expect(counterEl.className).toBe("red");
  


});
