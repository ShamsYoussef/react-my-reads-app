import React from "react";
import { BookModel } from "../models/Book.model";
import { MOVE_TO_LABEL, SHELVES } from "../utils/constants";
import { SelectContainer } from "./styles/Book.styled";

interface SelectProps {
  book: BookModel;
  updateBooksHandler: (book: BookModel, shelf: string) => void;
}

const SelectDropDown: React.FC<SelectProps> = ({
  book,
  updateBooksHandler
}) => {
  const shelves = Object.entries(SHELVES);

  return (
    <SelectContainer>
      <select
        data-testid="select"
        defaultValue={book.shelf || "none"}
        onChange={e => updateBooksHandler(book, e.target.value)}
      >
        <option value="None" disabled>
          {" "}
          {MOVE_TO_LABEL}
        </option>
        {shelves.map((shelf: string[], index: number) => {
          return (
            <option key={index} value={shelf[0]}>
              {shelf[1]}
            </option>
          );
        })}
      </select>
    </SelectContainer>
  );
};

export default SelectDropDown;
