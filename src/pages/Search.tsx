import { useState, useEffect } from "react";
import * as APIs from "../utils/BooksAPI";
import Book from "../components/Book";
import { useDebounce } from "use-debounce";
import { useStore } from "../store/store";
import {
  ADD_FILTERED_BOOKS,
  ADD_BOOKS,
  SHOW_ERROR
} from "../store/action-types";
import { BookList } from "../components/styles/Book.styled";
import { LOADING } from "./../store/action-types";
import Spinner from "../components/Spinner";
import SearchInput from "../components/SearchInput";
import Error from "../components/Error";
import { ERRORS } from "../utils/constants";

const Search = () => {
  const [input, setInput] = useState("");
  const [debounceInput] = useDebounce(input, 500);
  const [{ books, filteredBooks, isLoading, showError }, dispatch] = useStore();

  useEffect(() => {
    if (!books.length) APIs.getAll().then(data => dispatch(ADD_BOOKS, data));
  }, []);

  useEffect(() => {
    if (!debounceInput.trim()) return;

    console.log(debounceInput);

    dispatch(SHOW_ERROR, false);
    dispatch(LOADING, true);

    const filterBooks = async () => {
      console.log(isLoading);

      let data = await APIs.search(debounceInput, null);
      data = data.error ? [] : data;
      if (data) dispatch(ADD_FILTERED_BOOKS, data);
      dispatch(LOADING, false);
    };

    filterBooks().catch(() => {
      dispatch(LOADING, false);
      dispatch(SHOW_ERROR, true);
    });

    return () => dispatch(ADD_FILTERED_BOOKS, []);
  }, [debounceInput]);

  return (
    <>
      {isLoading && <Spinner />}

      <SearchInput
        isLoading={isLoading}
        setSearchInput={setInput}
      ></SearchInput>
      {!isLoading && showError && (
        <Error margin="120px" message={ERRORS.failed}></Error>
      )}
      <BookList padding="80px 10px 20px">
        {filteredBooks.map((book: any, index: number) => (
          <Book bookDetails={book} key={index} />
        ))}
      </BookList>
    </>
  );
};

export default Search;
