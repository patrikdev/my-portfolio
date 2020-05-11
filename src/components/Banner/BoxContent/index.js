import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 500px;
  background: #000000;
`;

const BoxContent = ({ children, style }) => {
  return <Container style={style}>{children}</Container>;
};

export default BoxContent;
