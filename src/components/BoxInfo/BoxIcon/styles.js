import styled from "styled-components";
import IconImg from "../../../assets/img/empresa.png";

export const Container = styled.div`
  width: 60px;
  height: 60px;
  padding: 10px;
  border-radius: 5px;
  background: #f9f9fc;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  background: url('${IconImg}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
