import { useState } from "react";
import { INPUT_PLACEHOLDER } from "../utils/constants";
import { SearchBar } from "./styles/Book.styled";
import { CloseButton } from "./styles/Button.styled";

interface SearchInputProps {
  isLoading: boolean;
  setSearchInput: (input: any) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  isLoading,
  setSearchInput
}) => {
  const [input, setInput] = useState("");

  const updateInput = (input: any) => {
    setInput(input);
    setSearchInput(input.trim());
  };
  return (
    <SearchBar isLoading={isLoading}>
      <CloseButton to="/" />
      <div>
        <input
          value={input}
          type="text"
          placeholder={INPUT_PLACEHOLDER}
          onChange={e => updateInput(e.target.value)}
        />
      </div>
    </SearchBar>
  );
};

export default SearchInput;
