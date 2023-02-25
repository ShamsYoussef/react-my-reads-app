import { BookModel } from "../models/Book.model";
import Book from "./Book";
import { ShelfContainer, BookList } from "./styles/Book.styled";

interface Props {
  title: string;
  books: BookModel[];
}

const Shelf: React.FC<Props> = ({ title, books }) => {
  return (
    <ShelfContainer data-testid="shelf">
      <h2>{title}</h2>
      {
        <BookList>
          {!!books?.length &&
            books.map((book: BookModel, index: number) => (
              <Book dataTestId='book' bookDetails={book} key={index} />
            ))}
        </BookList>
      }
    </ShelfContainer>
  );
};

export default Shelf;
