import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 0 20px;
`;

const Label = styled.div`
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
`;

const MenuItem = ({ label, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Label className="item-menu">{label}</Label>
    </Container>
  );
};

export default MenuItem;
