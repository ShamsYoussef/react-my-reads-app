import React from "react";
import { BookModel } from "../models/Book";
import { MOVE_TO_LABEL, SHELVES } from "../utils/constants";
import { SelectContainer } from "./styles/Book.styled";

interface Props {
  book: BookModel;
  updateBooksHandler: (book: BookModel, shelf: string) => void;
}

const SelectDropDown: React.FC<Props> = ({ book, updateBooksHandler }) => {
  return (
    <SelectContainer>
      <select
        defaultValue={book.shelf || "none"}
        onChange={e => updateBooksHandler(book, e.target.value)}
      >
        <option value="None" disabled>
          {MOVE_TO_LABEL}
        </option>
        <option value="currentlyReading">{SHELVES.currentlyReading}</option>
        <option value="wantToRead">{SHELVES.wantToRead}</option>
        <option value="read">{SHELVES.read}</option>
        <option value="none">{SHELVES.none}</option>
      </select>
    </SelectContainer>
  );
};

export default SelectDropDown;
