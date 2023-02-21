import { SHELVES } from "../utils/constants";
import * as APIs from "../BooksAPI";
import { UPDATE_BOOK } from "../store/action-types";
import { useStore } from "../store/store";
import { Card, Author, Title, Image, SelectContainer, Cover} from './styles/Book.styled'
const Book = ({ bookDetails }: any) => {

  const dispatch = useStore(false)[1];

  const updateBooksHandler = (book: any, shelf: string) => {
    APIs.update(book, shelf).then(() => {
      dispatch(UPDATE_BOOK, { book, shelf });
    });
  };

  return (
    <Card>
      <div>
        <Cover>
          <Image url = {bookDetails?.imageLinks?.thumbnail || ""}></Image>
          <SelectContainer>
            <select
              defaultValue={bookDetails.shelf || 'none'}
              onChange={e => updateBooksHandler(bookDetails, e.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">{SHELVES.currentlyReading}</option>
              <option value="wantToRead">{SHELVES.wantToRead}</option>
              <option value="read">{SHELVES.read}</option>
              <option value="none">{SHELVES.none}</option>
            </select>
          </SelectContainer>
        </Cover>
        <Title>{bookDetails.title || ""}</Title>
        <Author>{bookDetails.authors?.join(" & ") || ""}</Author>
      </div>
    </Card>
  );
};

export default Book;
