import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

test("renders spinner correctly", () => {
  render(<Spinner />);

  const spinner = screen.getByTestId("spinner");

  expect(spinner).toBeInTheDocument();
});
