import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px 0;
  text-align: center;
`;

const Label = styled.span`
  font-size: 2.5rem;
  font-weight: 300px;
  color: #4b505e;
`;

const SubTitle = (props) => {
  return (
    <Container className="container-subtitle">
      <Label className="label-subtitle">{props.label}</Label>
    </Container>
  );
};

export default SubTitle;
