import { HEADER } from "../utils/constants";
import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <h1>{HEADER}</h1>
    </StyledHeader>
  );
};

export default Header;
