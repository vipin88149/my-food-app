import { fireEvent, screen, act, render } from "@testing-library/react";
import MOCK_DATA from "/Users/vipinyadav/Desktop/my-food-app/src/components/__tests__/mokes/resListMockdata.json";
import "@testing-library/jest-dom";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should  search res list for burger input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsbeforeSearch = screen.getAllByTestId("rescard");

  expect(cardsbeforeSearch.length).toBe(8);

  const searchButton = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchButton);

  const cards = screen.getAllByTestId("rescard");

  expect(cards.length).toBe(2);
});

it("should filter top rated restaruants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsbeforeSearch = screen.getAllByTestId("rescard");

  expect(cardsbeforeSearch.length).toBe(8);

  const topRatedButton = screen.getByRole("button", { name: "Top rated restaurants" });

  fireEvent.click(topRatedButton);

  const cards = screen.getAllByTestId("rescard");

  expect(cards.length).toBe(8);
});