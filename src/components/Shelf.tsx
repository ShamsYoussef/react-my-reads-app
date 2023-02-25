import { BookModel } from "../models/Book.model";
import Book from "./Book";
import { ShelfContainer, BookList } from "./styles/Book.styled";

interface ShelfProps {
  title: string;
  books: BookModel[];
}

const Shelf: React.FC<ShelfProps> = ({ title, books }) => {
  return (
    <ShelfContainer data-testid="shelf">
      <h2>{title}</h2>
      <BookList>
        {books?.map((book: BookModel, index: number) => (
          <Book data-testid="book" bookDetails={book} key={index} />
        ))}
      </BookList>
    </ShelfContainer>
  );
};

export default Shelf;
