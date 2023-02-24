import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 50%;
  margin: ${(props: { margin?: string }) => props.margin || `50px`} auto;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;
