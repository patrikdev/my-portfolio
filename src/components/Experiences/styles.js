import styled from "styled-components";

export const Container = styled.div`
  /* background: "#ffffff"; */
  min-height: 700px;
  padding: 50px 0;
  background: blue;
`;

export const ContainerBox = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 33%;

  @media (max-width: 1140px) {
    width: 49%;
    padding-bottom: 20px;
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;
