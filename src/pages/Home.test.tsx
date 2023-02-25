import { render, screen, waitFor } from "@testing-library/react";
import { BookModel } from "../models/Book.model";
import Home from "./Home";

describe("Home", () => {
  global.fetch = jest.fn();
  const mockedFetch = fetch as jest.Mock;

  const allBooks: BookModel[] = [
    {
      id: "G123",
      authors: ["Shams", "youssef"],
      title: "Nano Science",
      shelf: "wantToRead",
      imageLinks: {
        thumbnail: "book.svg"
      }
    },
    {
      id: "G1523",
      authors: ["Eslam", "Mohamed"],
      title: "Geology",
      shelf: "read",
      imageLinks: {
        thumbnail: "book5.svg"
      }
    }
  ];

  beforeEach(() => {
    mockedFetch.mockClear();
  });

  it("Should display header", () => {
    render(<Home />);

    const header = screen.getByText("MyReads");

    expect(header).toBeInTheDocument();
  });

  it("Should display shelves if books were returned", async () => {
    mockedFetch.mockResolvedValue({
      json: () => Promise.resolve(allBooks)
    });
    render(<Home />);

    await waitFor(() => {
      const shelves = screen.queryByTestId("shelves");
      expect(mockedFetch).toHaveBeenCalledTimes(1);
      expect(shelves).toBeDefined();
    });
  });

  it("Should display error message if the service fails", async () => {
    mockedFetch.mockRejectedValue(new Error("error"));
    render(<Home />);

    await waitFor(() => {
      const errorMessage = screen.queryByText("Something went wrong", {
        exact: false
      });
      expect(mockedFetch).toHaveBeenCalledTimes(1);
      expect(errorMessage).toBeDefined();
    });
  });
});
