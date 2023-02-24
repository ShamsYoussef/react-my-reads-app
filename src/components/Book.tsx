import * as APIs from "../utils/BooksAPI";
import { UPDATE_BOOK, LOADING, SHOW_ERROR } from "../store/action-types";
import { useStore } from "../store/store";
import { Card, Author, Title, Image, Cover } from './styles/Book.styled'
import { BookModel } from "../models/Book";
import SelectDropDown from './SelectDropDown';

interface BookProps {
  bookDetails: BookModel
}

const Book: React.FC<BookProps> = ({ bookDetails }) => {
  const dispatch = useStore()[1];

  /**
   * Call the Api to update the books
   * then dispatch() to move the updated book to the new shelf
   */
  const updateBooksHandler = async (book: any, shelf: string) => {
    try {
      dispatch(LOADING, true)
      dispatch(SHOW_ERROR, false)
      await APIs.update(book, shelf);
      dispatch(LOADING, false);
      dispatch(UPDATE_BOOK, { book, shelf });
    }
    catch {      
      dispatch(LOADING, false);
      dispatch(SHOW_ERROR, true)
    }
  };

  return (
    <Card>
      <div>
        <Cover>
          <Image image={bookDetails?.imageLinks?.thumbnail || ""}></Image>
          <SelectDropDown updateBooksHandler= {updateBooksHandler} book= {bookDetails}></SelectDropDown>
        </Cover>
        <Title>{bookDetails.title || ""}</Title>
        <Author>{bookDetails.authors?.join(" & ") || ""}</Author>
      </div>
    </Card>
  );
};

export default Book;
