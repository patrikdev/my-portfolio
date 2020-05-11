import styled from "styled-components";
import IMG from "../../../assets/img/patrik.jpg";

export const Container = styled.div`
  width: 350px;
  height: 350px;
  background: #ffffff;
  border-radius: 7px;
  overflow: hidden;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url('${IMG}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
