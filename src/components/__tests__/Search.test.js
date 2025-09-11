import Body from "../Body"
import { fireEvent, render, screen,waitFor  } from "@testing-library/react";
import "@testing-library/jest-dom";
import mock_data from "../MockData/resSearchMock.json"
import { BrowserRouter } from "react-router";
import { act } from "react";


global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(mock_data)
        }
    })
})

test("Should search for resList and veg text input", async() => {
  await act(async () =>
 render(
   <BrowserRouter>
    <Body/>
    </BrowserRouter>

 )
)

const cardsBeforeSearch = screen.getAllByTestId("resCard")

expect(cardsBeforeSearch.length).toBe(8)

const searchBtn = await screen.findByRole('button', { name: /search/i });

const searchInput = screen.getByTestId("searchInput");

fireEvent.change(searchInput, {target: {value : "veg"}});

fireEvent.click(searchBtn);

const cards = screen.getAllByTestId("resCard");

expect(cards.length).toBe(3);


});

test("Should search for topRatedRestuarent", async() => {
  await act(async () =>
 render(
   <BrowserRouter>
    <Body/>
    </BrowserRouter>

 )
)

const cardsBeforeFilter = screen.getAllByTestId("resCard")

expect(cardsBeforeFilter.length).toBe(8)

const topRatedBtn = await  screen.findByRole("button", { name: /Top Rated Resturents/i });

fireEvent.click(topRatedBtn);

const topRatedResCards = screen.getAllByTestId("resCard");

expect(topRatedResCards.length).toBe(5);


});