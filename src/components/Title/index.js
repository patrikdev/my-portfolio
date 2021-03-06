import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 0;
`;

const Label = styled.div`
  color: #4b505e;
  font-size: 60px;
  text-align: center;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 52px;
  }

  @media (max-width: 320px) {
    font-size: 44px;
  }
`;

const Title = ({ title }) => {
  return (
    <Container className="container-title">
      <Label clasName="label-title">{title}</Label>
    </Container>
  );
};

export default Title;
