import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const PageWidth = ({ children }) => {
  return <Container className="container-page-width">{children}</Container>;
};

export default PageWidth;
