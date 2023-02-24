import Home from "./Home";

import { render, screen } from "@testing-library/react";
import Shelves from "../components/Shelves";
import { ERRORS } from "../utils/constants";
describe("Home Page", () => {
  const allBooks = [
    {
      id: "djjdjdjdj"
    }
  ];
  test("async test", async () => {
    window.fetch = jest.fn().mockRejectedValueOnce(new Error("error"));
    const container = render(<Home />);
    console.log(container);

    const error = await screen.queryByText("Something went wrong", {
      exact: true
    });
    console.log("error", error);

    expect(error).toBeInTheDocument();
  });
});
