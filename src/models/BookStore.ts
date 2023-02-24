import { BookModel } from "./Book";

export interface BookStore {
  books: BookModel[];
  currentlyReading: BookModel[];
  wantToRead: BookModel[];
  read: BookModel[];
  filteredBooks: BookModel[];
  isLoading: boolean;
  ShowError: boolean;
}
