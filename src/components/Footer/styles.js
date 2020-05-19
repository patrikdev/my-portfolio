import styled from "styled-components";

export const Container = styled.div`
  background: #020230;
  min-height: 500px;
  padding: 50px 0;
`;

export const Col = styled.div`
  width: 33%;
  display: inline-block;
  vertical-align: top;

  @media (max-width: 1180px) {
    width: 49%;
    text-align: center;
  }

  @media (max-width: 865px) {
    width: 100%;
  }
`;
