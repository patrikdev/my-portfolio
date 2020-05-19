import styled from "styled-components";

export const Container = styled.div`
  background: #f9f9fc;
  min-height: 500px;
  padding: 50px 0;
`;

export const Col = styled.div`
  width: 49%;
  display: inline-block;
  vertical-align: top;

  @media (max-width: 700px) {
    width: 100%;
  }
`;
