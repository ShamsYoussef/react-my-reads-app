import { render, screen } from "@testing-library/react";
import { BookModel } from "../models/Book.model";
import Shelf from "./Shelf";

describe("Shelf component", () => {
  const books: BookModel[] = [
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
      id: "G1883",
      authors: ["Omar", "youssef"],
      title: "Math",
      shelf: "read",
      imageLinks: {
        thumbnail: "book3.svg"
      }
    }
  ];

  const setupShelf = (books: BookModel[], title: string = "read") => {
    render(<Shelf title={title} books={books} />);
  };

  it("renders Shelf correctly", () => {
    setupShelf(books);
    const shelf = screen.getByTestId("shelf");
    expect(shelf).toBeInTheDocument();
  });

  it("Should display title correctly", () => {
    setupShelf(books, "Want To Read");

    const titleEl = screen.getByRole("heading");

    expect(titleEl).toBeInTheDocument();
    expect(titleEl.textContent).toBe("Want To Read");
  });

  it("should display the correct number of books", () => {
    setupShelf(books, "Want To Read");

    const booksEl = screen.getAllByTestId("book");

    expect(booksEl).toHaveLength(2);
  });
});
