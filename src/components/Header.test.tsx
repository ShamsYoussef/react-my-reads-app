import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { HEADER } from "./../utils/constants";

test("renders page header correctly", () => {
  render(<Header />);

  const header = screen.getByText(HEADER);

  expect(header).toBeInTheDocument();
  expect(header.tagName).toBe("H1");
});
