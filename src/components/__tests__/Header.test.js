import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should load Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

    const loginButton = screen.getByRole("button", { name:"Login" })
    expect(loginButton).toBeInTheDocument();

});

it("should load Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

    const cartItems = screen.getByText(/cart/)
    expect(cartItems).toBeInTheDocument();

});

it("should change login button to logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

    const loginButton = screen.getByRole("button", { name:"Login" })

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", { name:"Logout" })

    expect(logoutButton).toBeInTheDocument();

});