import { useState, useEffect } from "react";
import Header from "../components/Header";
import * as APIs from "../BooksAPI";
import Shelves from "../components/Shelves";
import { useStore } from "../store/store";
import { ADD_BOOKS } from "../store/action-types";
import { SearchButton } from "../components/styles/Button.styled";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [{ books }, dispatch] = useStore();

  const getAllBooks = () => {
    setLoading(true);
    APIs.getAll()
      .then(data => {
        setLoading(false);
        dispatch(ADD_BOOKS, data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => getAllBooks(), []);

  return (
    <>
      {loading && <h1>Loading</h1>}
      {!loading && books && (
        <main>
          <Header />
          <Shelves />
          <SearchButton to="/search" />
        </main>
      )}
    </>
  );
};

export default Home;
