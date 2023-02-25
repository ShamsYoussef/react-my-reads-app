import { render, screen } from "@testing-library/react";
import Shelves from "./Shelves";

describe("Shelves component", () => {
  const setupShelves = () => {
    render(<Shelves />);
  };

  it("renders Shelves correctly", () => {
    setupShelves();

    const shelves = screen.getByTestId("shelves");

    expect(shelves).toBeInTheDocument();
  });
});
