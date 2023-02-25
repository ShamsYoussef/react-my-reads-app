import styled from "styled-components";

export const NotificationContainer = styled.div`
  width: 50%;
  margin: ${(props: { margin?: string }) => props.margin || `50px`} auto 0;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;
