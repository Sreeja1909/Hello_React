import { render, screen } from "@testing-library/react";
import RestaurentCard from "../RestaurentCard";
import Mock from "../MockData/resCardMock"; // default import
import "@testing-library/jest-dom";

test("Should render restaurant name", () => {
  render(<RestaurentCard resData={Mock} />);
const name=  screen.getByText(/burger king/i)
  expect(name).toBeInTheDocument();
});
