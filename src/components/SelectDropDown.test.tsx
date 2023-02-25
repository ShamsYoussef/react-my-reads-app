import { render, screen, fireEvent } from "@testing-library/react";
import { BookModel } from "../models/Book.model";
import SelectDropDown from "./SelectDropDown";

describe("Select dropDown component", () => {
  const updateBooksHandlerMock = jest.fn();
  const bookDetails: BookModel = {
    id: "G123",
    authors: ["Shams", "youssef"],
    title: "Nano Science",
    shelf: "wantToRead",
    imageLinks: {
      thumbnail: "book.svg"
    }
  };

  const setupSelect = (book: BookModel) => {
    render(
      <SelectDropDown book={book} updateBooksHandler={updateBooksHandlerMock} />
    );
  };

  it("renders Select dropDown correctly", () => {
    setupSelect(bookDetails);

    const selectEl = screen.getByTestId("select");

    expect(selectEl).toBeInTheDocument();
  });

  it("'Move to...' option should be disabled", () => {
    setupSelect(bookDetails);

    const optionEl = screen.getByText("Move to...") as HTMLOptionElement;

    expect(optionEl).toBeDisabled();
  });

  it("should display the correct number of options", () => {
    setupSelect(bookDetails);

    const optionsEl = screen.getAllByRole("option");

    expect(optionsEl).toHaveLength(5);
  });

  it("should change options correctly", () => {
    setupSelect(bookDetails);

    const select = screen.getByTestId("select") as HTMLSelectElement;
    const option = screen.getByRole("option", {
      name: "Want to Read"
    }) as HTMLOptionElement;

    fireEvent.change(select, { target: { value: "wantToRead" } });

    expect(select.value).toBe("wantToRead");
    expect(option.selected).toBe(true);
  });

  it("should set None as a default value if there is no shelf", () => {
    const book = { ...bookDetails, shelf: "" };
    setupSelect(book);

    const select = screen.getByTestId("select") as HTMLSelectElement;

    expect(select.value).toBe("none");
  });

  it("Should call updateBooksHandler when change options ", () => {
    setupSelect(bookDetails);
    const selectEl = screen.getByTestId("select");

    fireEvent.change(selectEl, { target: { value: "read" } });

    expect(updateBooksHandlerMock).toHaveBeenCalledWith(bookDetails, "read");
  });
});
