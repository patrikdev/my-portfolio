import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 500px;
  max-height: 700px;
  background: #ffffff;
  padding: 20px 0;
`;

export const Title = styled.div`
  padding: 30px 0;
  color: #4b505e;
  font-size: 60px;
  text-align: center;
  font-weight: bold;
`;

const BoxContent = ({ children, style, title }) => {
  return (
    <Container style={style}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default BoxContent;
