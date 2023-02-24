import { useEffect } from "react";
import * as APIs from "../utils/BooksAPI";
import { useStore } from "../store/store";
import { ADD_BOOKS, LOADING, SHOW_ERROR } from "../store/action-types";
import { ERRORS } from "../utils/constants";
import { SearchButton } from "../components/styles/Button.styled";
import Shelves from "../components/Shelves";
import Notification from "../components/Notification";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import { BookModel } from "../models/Book";

const Home = () => {
  const [{ books, isLoading, showError }, dispatch] = useStore();

  useEffect(() => {
    const getAllBooks = async () => {
      dispatch(SHOW_ERROR, false);
      dispatch(LOADING, true);
      const allBooks = await APIs.getAll() as BookModel[];  
      dispatch(LOADING, false);
      dispatch(ADD_BOOKS, allBooks);
    };

    getAllBooks().catch(() => {
      dispatch(LOADING, false);
      dispatch(SHOW_ERROR, true);
      dispatch(ADD_BOOKS, []);

    });
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <Header />
      {!isLoading && showError && (
        <Notification message={ERRORS.failed} severity= "error"></Notification>
      )}

      {!isLoading && !!books?.length && (
        <>
          <Shelves />
          <SearchButton to="/search" />
        </>
      )}
    </>
  );
};

export default Home;
