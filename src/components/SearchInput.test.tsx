import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchInput from "./SearchInput";

describe("SearchInput component", () => {
  const mockedupdateInputFunc = jest.fn();

  const setupInput = () => {
    const inputPlaceholder = "Search by title, author, or ISBN";

    render(
      <MemoryRouter>
        <SearchInput isLoading={false} setSearchInput={mockedupdateInputFunc} />
      </MemoryRouter>
    );

    const searchInputEl = screen.getByPlaceholderText(
      inputPlaceholder
    ) as HTMLInputElement;

    return searchInputEl;
  };

  it("renders search input correctly", () => {
    const searchInputEl = setupInput();

    expect(searchInputEl).toBeInTheDocument();
  });

  it("Search input should be empty", () => {
    const searchInputEl = setupInput();

    expect(searchInputEl).toBeEmptyDOMElement();
  });

  it("Search input should be changed correctly", () => {
    const searchInputEl = setupInput();

    const searchValue = "pro";
    fireEvent.change(searchInputEl, { target: { value: searchValue } });

    expect(searchInputEl.value).toBe(searchValue);
  });

  it("Should call 'mockedupdateInputFunc' function on change input ", () => {
    const searchInputEl = setupInput();

    const searchValue = "pro";
    fireEvent.change(searchInputEl, { target: { value: searchValue } });

    expect(mockedupdateInputFunc).toHaveBeenCalledWith(searchValue);
  });
});
