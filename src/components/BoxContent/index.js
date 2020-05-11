import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 500px;
  background: black;
`;

const BoxContent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BoxContent;
