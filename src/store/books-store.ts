import { initializeStore } from "./store";
import {
  ADD_BOOKS,
  UPDATE_BOOK,
  ADD_FILTERED_BOOKS,
  LOADING,
  SHOW_ERROR
} from "./action-types";
import { BookModel } from "../models/Book";
import { SHELVES } from "./../utils/constants";
import { BookStore } from "../models/BookStore";

const configureStore = () => {
  const initialState: BookStore = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    filteredBooks: [],
    isLoading: false,
    ShowError: false
  };

  /** Add books to the shelf based on the shelf property */
  const categorizeBooks = (state: BookStore, books: BookModel[]) => {
    const shelves = Object.keys(SHELVES);
    state.currentlyReading = [];
    state.wantToRead = [];
    state.read = [];

    books.forEach((book: BookModel) => {
      if (book.shelf === shelves[0]) state.currentlyReading.push(book);
      if (book.shelf === shelves[1]) state.wantToRead.push(book);
      if (book.shelf === shelves[2]) state.read.push(book);
    });
  };

  /** Add the books to the current State  */
  const addBooks = (currentState: BookStore, books: BookModel[]) => {
    categorizeBooks(currentState, books);

    return { ...currentState, books };
  };

  /**
   * Move the book to the selected shelf
   * then replace the books with the updated books
   */
  const updateBooks = (
    currentState: BookStore,
    { book, shelf }: { book: BookModel; shelf: string }
  ) => {
    const updatedBooks: BookModel[] = currentState.books.map((b: BookModel) => {
      if (b.id === book.id) b.shelf = shelf;
      return b;
    });

    categorizeBooks(currentState, updatedBooks);

    return { ...currentState, books: updatedBooks };
  };

  /**
   * Add shelf property to book If this book is assigned to a shelf on the home page.
   * Then add filtered books to the current state
   */
  const addFilteredBooks = (
    currentState: BookStore,
    filteredBooks: BookModel[]
  ) => {
    filteredBooks.map((b: BookModel) => {
      const bookIndex = currentState.books.findIndex(
        (book: BookModel) => book.id === b.id
      );
      if (bookIndex !== -1) b.shelf = currentState.books[bookIndex].shelf;

      return b;
    });
    return { ...currentState, filteredBooks };
  };

  /** Add "isLoading" to the current state  */
  const setLoading = (currentState: BookStore, isLoading: boolean) => {
    return { ...currentState, isLoading };
  };

  /** Add "showError" to the current state  */
  const showError = (currentState: BookStore, showError: boolean) => {
    return { ...currentState, showError };
  };
  /** All book actions */
  const actions: {} = {
    [ADD_BOOKS]: addBooks,
    [UPDATE_BOOK]: updateBooks,
    [ADD_FILTERED_BOOKS]: addFilteredBooks,
    [LOADING]: setLoading,
    [SHOW_ERROR]: showError
  };

  initializeStore(actions, initialState);
};

export default configureStore;
