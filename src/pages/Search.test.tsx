import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BookModel } from "../models/Book.model";
import { ERRORS, INPUT_PLACEHOLDER } from "../utils/constants";
import Search from "./Search";

describe("Search", () => {
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

  const setupSearch = () => {
    mockedFetch.mockResolvedValue({
      json: () => Promise.resolve(allBooks)
    });

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    mockedFetch.mockClear();
  });

  it("Should display search input", () => {
    setupSearch();

    const searchInputEl = screen.getByPlaceholderText(INPUT_PLACEHOLDER);

    expect(searchInputEl).toBeInTheDocument();
  });

  it("Should display Book list if books were returned", async () => {
    setupSearch();

    const searchInputEl = screen.getByPlaceholderText(INPUT_PLACEHOLDER);

    fireEvent.change(searchInputEl, { target: { value: "pro" } });

    await waitFor(() => {
      expect(mockedFetch).toHaveBeenCalledTimes(2);
      const bookList = screen.queryByTestId("bookList");
      expect(bookList).toBeDefined();
    });
  });

  it("Should display error message if the service fails", async () => {
    setupSearch();

    mockedFetch.mockImplementation(() => Promise.reject(new Error("error")));

    const searchInputEl = screen.getByPlaceholderText(INPUT_PLACEHOLDER);

    fireEvent.change(searchInputEl, { target: { value: "pro" } });

    await waitFor(() => {
      const errorMessage = screen.queryByText("Something went wrong", {
        exact: false
      });
      expect(mockedFetch).toHaveBeenCalledTimes(1);
      expect(errorMessage).toBeDefined();
    });
  });

  it("Should display NotFound notification if there are no books wa returned", async () => {
    setupSearch();

    mockedFetch.mockImplementation(() =>
      Promise.resolve({ data: { error: {} } })
    );

    const searchInputEl = screen.getByPlaceholderText(INPUT_PLACEHOLDER);

    fireEvent.change(searchInputEl, { target: { value: "pro" } });

    await waitFor(() => {
      const notFoundMessage = screen.queryByText(ERRORS.notFound);
      expect(mockedFetch).toHaveBeenCalledTimes(1);
      expect(notFoundMessage).toBeDefined();
    });
  });
});
