import { initializeStore } from "./store";
import { ADD_BOOKS, UPDATE_BOOK, ADD_FILTERED_BOOKS } from "./action-types";
const configureStore = () => {
  const initialState = {
    books: [],
    filteredBooks: []
  };

  const actions: any = {
    [ADD_BOOKS]: (currentState: any, books: any) => {
      return { ...currentState, books };
    },
    [UPDATE_BOOK]: (currentState: any, { book, shelf }: any) => {
      const updatedBooks: any = currentState.books.map((b: any) => {
        if (b.id === book.id) b.shelf = shelf;
        return b;
      });

      return { ...currentState, books: updatedBooks };
    },
    [ADD_FILTERED_BOOKS]: (currentState: any, filteredBooks: any) => {
      filteredBooks.map((b: any) => {
        const bookIndex = currentState.books.findIndex(
          (book: any) => book.id === b.id
        );
        if (bookIndex !== -1) b.shelf = currentState.books[bookIndex].shelf;

        return b;
      });
      return { ...currentState, filteredBooks };
    }
  };

  initializeStore(actions, initialState);
};

export default configureStore;
