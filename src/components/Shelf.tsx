import Book from "./Book";
import { ShelfContainer, BookList } from "./styles/Book.styled";
const Shelf = ({ title, books }: any) => {
  return (
    <ShelfContainer>
      <h2>{title}</h2>
      <BookList>
        {books.map((book: any, index: number) => (
          <Book bookDetails={book} key={index} />
        ))}
      </BookList>
    </ShelfContainer>
  );
};

export default Shelf;
