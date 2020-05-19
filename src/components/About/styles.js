import styled from "styled-components";

export const Container = styled.div`
  background: #f9f9fc;
  min-height: 700px;
  padding: 50px 0;
`;

export const Title = styled.div`
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 42px;
  font-weight: 900;
  font-family: "Open-Sans", sans-serif;
  text-align: center;
`;

export const Col = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 14.2%;
  padding: 20px 0;
  text-align: center;

  @media (max-width: 1025px) {
    width: 30%;
  }
`;
