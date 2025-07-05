import { screen, act, fireEvent, render } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "/Users/vipinyadav/Desktop/my-food-app/src/components/__tests__/mokes/mockresmenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() =>
  Promise.resolve({
   })
);

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Flash Sale Pizzas");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("fooditems").length).toBe(2);

  expect(screen.getByText("cart(0 items)"))

  const addBtns = screen.getAllByRole("button", { name: "- add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("cart(1 items)"))
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("cart(2 items)"))

});
