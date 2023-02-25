import { render, screen } from "@testing-library/react";
import Shelves from "./Shelves";

it("renders Shelves correctly", () => {
  render(<Shelves />);

  const shelves = screen.getByTestId("shelves");

  expect(shelves).toBeInTheDocument();
});
