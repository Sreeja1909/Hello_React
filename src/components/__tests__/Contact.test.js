import { render,screen  } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom';


test("Should load contact us Component", () =>{
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("Should load button insidecontact us Component", () =>{
    render(<Contact />);

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument();
})

test("Should load placeholder inside contact us Component", () =>{
    render(<Contact />);

     const name = screen.getByPlaceholderText("name");
    expect(name).toBeInTheDocument();
})

test("Should load textboxs inside contact us Component", () =>{
    render(<Contact />);

     const tb = screen.getAllByRole("textbox");
    expect(tb.length).toBe(2);
})