import Shelf from "./Shelf";
import { SHELVES } from "../utils/constants";
import { StyledShelves } from "./styles/Book.styled";
import { useStore } from "../store/store";

const Shelves = () => {
  const { books } = useStore()[0];
  const shelves = [
    {
      title: SHELVES.currentlyReading,
      books: books.filter((book: any) => book.shelf === "currentlyReading")
    },
    {
      title: SHELVES.wantToRead,
      books: books.filter((book: any) => book.shelf === "wantToRead")
    },
    {
      title: SHELVES.read,
      books: books.filter((book: any) => book.shelf === "read")
    }
  ];
  return (
    <StyledShelves>
      {shelves.map(
        (shelf, index) =>
          !!shelf.books?.length && (
            <Shelf key={index} title={shelf.title} books={shelf.books} />
          )
      )}
    </StyledShelves>
  );
};

export default Shelves;
