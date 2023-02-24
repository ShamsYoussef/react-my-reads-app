import styled from "styled-components";
import arrowDown from "../../assets/icons/arrow-drop-down.svg";

export const Card = styled.li`
  & > div {
    width: 140px;
  }
`;

export const Cover = styled.div`
  position: relative;
  height: 200px;
  display: flex;
  align-items: flex-end;
`;

export const Author = styled.div`
  font-size: 0.8em;
  color: #999;
`;

export const Title = styled.div`
  font-size: 0.8em;
  margin-top: 10px;
`;

export const Image = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #eee;
  width: 128px;
  height: 193px;
  background-image: ${(props: { image?: string }) => `url(${props.image})`};
`;

export const SelectContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgb(120 166 192);
  background-image: url(${arrowDown});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  select {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

export const StyledShelves = styled.div`
  padding: 0 0 80px;
  flex: 1;
`;

export const ShelfContainer = styled.div`
  padding: 0 10px 20px;

  @media (min-width: 600px) {
    padding: 0 20px 40px;
  }
  h2 {
    border-bottom: 1px solid #dedede;
  }
`;

export const BookList = styled.div`
  list-style-type: none;
  padding: ${(props: { padding?: string }) => props.padding || 0};
  margin: 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  li {
    padding: 10px 15px;
    text-align: left;
  }
`;

export const SearchBar = styled.div`
  position: fixed;
  width: 100%;
  top: ${(props: { isLoading: boolean }) => (props.isLoading ? 5 : 0)};
  left: 0;
  z-index: 5;
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23);

  & > div {
    flex: 1;
    background: #e9e;
  }

  input {
    width: 100%;
    padding: 15px 10px;
    font-size: 1.25em;
    border: none;
    outline: none;
  }
`;
