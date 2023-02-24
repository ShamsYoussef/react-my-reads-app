import Shelf from "./Shelf";
import { SHELVES } from "../utils/constants";
import { StyledShelves } from "./styles/Book.styled";
import { useStore } from "../store/store";
import { BookModel } from "../models/Book";

const Shelves = () => {
  const { currentlyReading, wantToRead, read } = useStore()[0];
  const shelves = [currentlyReading, wantToRead, read];
  const shelvesTitle = Object.values(SHELVES)

  return (
    <StyledShelves>
      {shelves?.map(
        (shelf: BookModel[], index: number) =>
          !!shelf?.length && (
            <Shelf key={index} title={shelvesTitle[index]} books={shelf} />
          )
      )}
    </StyledShelves>
  );
};

export default Shelves;
