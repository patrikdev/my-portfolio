import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-height: 700px;
  background: #ffffff;
  padding: 20px 0;
`;

const BoxContent = ({ children, style }) => {
  return <Container style={style}>{children}</Container>;
};

export default BoxContent;
