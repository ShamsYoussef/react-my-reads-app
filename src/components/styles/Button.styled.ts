import styled from "styled-components";
import addIcon from "../../assets/icons/add.svg";
import arrowBack from "../../assets/icons/arrow-back.svg";
import { Link } from "react-router-dom";

export const SearchButton = styled(Link)`
  position: fixed;
  right: 25px;
  bottom: 25px;
  cursor: pointer;
  border: none;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgb(120 166 192);
  background-image: url(${addIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  font-size: 0;
`;

export const CloseButton = styled(Link)`
  border: none;
  cursor: pointer;
  display: block;
  top: 20px;
  left: 15px;
  width: 50px;
  height: 53px;
  background: white;
  background-image: url(${arrowBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 28px;
  font-size: 0;
`;
