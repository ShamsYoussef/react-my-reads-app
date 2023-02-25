import { render, screen } from "@testing-library/react";
import { BookModel } from "../models/Book.model";
import Book from "./Book";

describe("Book component", () => {
  const bookDetails: BookModel = {
    id: "G123",
    authors: ["Shams", "youssef"],
    title: "Nano Science",
    shelf: "wantToRead",
    imageLinks: {
      thumbnail: "book.svg"
    }
  };

  const setupNotification = (book: BookModel) => {
    render(<Book bookDetails={book} />);
  };

  it("renders book card correctly", () => {
    setupNotification(bookDetails);
    const bookCardEl = screen.getByTestId("bookCard");
    expect(bookCardEl).toBeInTheDocument();
  });

  it("renders image correctly", () => {
    setupNotification(bookDetails);

    const imageEl = screen.getByTestId("image");

    expect(imageEl).toBeInTheDocument();
  });

  it("should display correct title", () => {
    setupNotification(bookDetails);

    const titleEl = screen.getByTestId("title");

    expect(titleEl.textContent).toBe("Nano Science");
  });

  it("Should display empty string if there is no title", () => {
    const book = { ...bookDetails, title: "" };
    setupNotification(book);

    const titleEl = screen.getByTestId("title");

    expect(titleEl).toBeEmptyDOMElement();
  });

  it("should display authors correctly", () => {
    setupNotification(bookDetails);

    const authorEl = screen.getByTestId("authors");

    expect(authorEl.textContent).toBe("Shams & youssef");
  });

  it("Should display empty string if there are no authors", () => {
    const book = { ...bookDetails, authors: [] };
    setupNotification(book);

    const authorEl = screen.getByTestId("authors");

    expect(authorEl).toBeEmptyDOMElement();
  });

});
