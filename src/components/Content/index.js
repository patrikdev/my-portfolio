import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  /* top: 70px; */
`;

const Content = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;
