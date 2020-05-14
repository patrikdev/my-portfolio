import styled from "styled-components";
import Persons from "../../../assets/img/dev.png";

export const Container = styled.div`
  width: 380px;
  height: 380px;
  margin: auto;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url('${Persons}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
