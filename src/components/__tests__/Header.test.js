import { fireEvent,render ,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import appStore from "../../utils/appStore" 
import '@testing-library/jest-dom';  

test("Should load login button in header Component", () =>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
      </Provider>
      </BrowserRouter>
      );  

      //const loginButton = screen.getByRole("button");

      const CartItem = screen.getByText("Cart -(0 items)");

      expect(CartItem).toBeInTheDocument();
})

test("Should load Cart in header Component", () =>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
      </Provider>
      </BrowserRouter>
      );  

      const cart = screen.getByText(/Cart/);

      expect(cart).toBeInTheDocument();
})

test("Should change login/logout button on click in header Component", () =>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
      </Provider>
      </BrowserRouter>
      );  

    const loginButton = screen.getByRole("button", {name:"login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"logout"});

      expect(logoutButton).toBeInTheDocument();
})