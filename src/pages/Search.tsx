import { useState, useEffect } from "react";
import * as APIs from "../BooksAPI";
import Book from "../components/Book";
import { INPUT_PLACEHOLDER } from "../utils/constants";
import { useDebounce } from "use-debounce";
import { useStore } from "../store/store";
import { ADD_FILTERED_BOOKS, ADD_BOOKS } from "../store/action-types";
import { BookList, SearchBar } from "../components/styles/Book.styled";
import { CloseButton } from "../components/styles/Button.styled";

const Search = () => {
  const [input, setInput] = useState("");
  const [debounceInput] = useDebounce(input, 500);
  const [{ books, filteredBooks }, dispatch] = useStore();

  useEffect(() => {
    if (!books.length) APIs.getAll().then(data => dispatch(ADD_BOOKS, data));
  }, []);

  useEffect(() => {
    if (!debounceInput.trim()) return;

    APIs.search(debounceInput, null).then((data: any) => {
      data = data.error ? [] : data;
      if (data) dispatch(ADD_FILTERED_BOOKS, data);
    });

    return () => dispatch(ADD_FILTERED_BOOKS, []);
  }, [debounceInput]);

  return (
    <>
      <SearchBar>
        <CloseButton to="/" />
        <div>
          <input
            value={input}
            type="text"
            placeholder={INPUT_PLACEHOLDER}
            onChange={e => setInput(e.target.value)}
          />
        </div>
      </SearchBar>
      <BookList padding="80px 10px 20px">
        {filteredBooks.map((book: any, index: number) => (
          <Book bookDetails={book} key={index} />
        ))}
      </BookList>
    </>
  );
};

export default Search;
