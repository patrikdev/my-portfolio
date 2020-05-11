import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1200px;
  margin: auto;
`;

const PageWidth = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageWidth;
