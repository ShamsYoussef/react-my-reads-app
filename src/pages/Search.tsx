import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

import * as APIs from "../utils/BooksAPI";
import { useStore } from "../store/store";
import { BookList } from "../components/styles/Book.styled";
import Book from "../components/Book";
import Spinner from "../components/Spinner";
import SearchInput from "../components/SearchInput";
import Notification from "../components/Notification";
import { ERRORS } from "../utils/constants";
import {
  ADD_FILTERED_BOOKS,
  ADD_BOOKS,
  SHOW_ERROR,
  LOADING
} from "../store/action-types";
import { BookModel } from "../models/Book.model";

const Search = () => {
  const [input, setInput] = useState("");
  const [debounceInput] = useDebounce(input, 500);
  const [{ books, filteredBooks, isLoading, showError }, dispatch] = useStore();

  /**
   * Call "getAll()" if the books are lost due to "Refresh" => to add
   * shelf property to each book that is assigned to a shelf on the home page.
   */
  useEffect(() => {
    if (!books?.length) APIs.getAll().then(data => dispatch(ADD_BOOKS, data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!books?.length]);

  useEffect(() => {
    if (!debounceInput) return;

    dispatch(SHOW_ERROR, false);
    dispatch(LOADING, true);
    const filterBooks = async () => {
      let data = await APIs.search(debounceInput, null);
      data = data.error ? [] : data;
      if (data) dispatch(ADD_FILTERED_BOOKS, data);
      dispatch(LOADING, false);
    };

    filterBooks().catch(() => {
      dispatch(LOADING, false);
      dispatch(SHOW_ERROR, true);
      dispatch(ADD_FILTERED_BOOKS, []);
    });

    /** CleanUp */
    return () => dispatch(ADD_FILTERED_BOOKS, []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceInput]);

  return (
    <>
      {isLoading && <Spinner />}

      <SearchInput
        isLoading={isLoading}
        setSearchInput={setInput}
      ></SearchInput>
      
       {!isLoading && debounceInput && showError && (
        <Notification
          margin="120px"
          message={ERRORS.failed}
          severity="error"
        ></Notification>
      )}

      {!isLoading && debounceInput && !showError && !filteredBooks?.length && (
        <Notification
          margin="120px"
          message={ERRORS.notFound}
          severity="info"
        ></Notification>
      )}

      {!isLoading && !!filteredBooks?.length &&
        <BookList data-testid='bookList' padding="80px 10px 20px">
          {filteredBooks.map((book: BookModel, index: number) => (
            <Book bookDetails={book} key={index} />
          ))}
        </BookList>
      }
    </>
  );
};

export default Search;
