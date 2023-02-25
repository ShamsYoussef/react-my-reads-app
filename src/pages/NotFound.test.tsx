import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

it("Should display NotFound notification", () => {
  render(<NotFound />);

  const notFoundMessage = screen.getByText("Page Not Found");

  expect(notFoundMessage).toBeInTheDocument();
});
