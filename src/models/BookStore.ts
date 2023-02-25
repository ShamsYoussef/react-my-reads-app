import { BookModel } from "./Book.model";

export interface BookStore {
  books: BookModel[];
  currentlyReading: BookModel[];
  wantToRead: BookModel[];
  read: BookModel[];
  filteredBooks: BookModel[];
  isLoading: boolean;
  ShowError: boolean;
}
