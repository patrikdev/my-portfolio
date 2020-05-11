import styled from "styled-components";
import IMG from "../../assets/img/programmer.jpeg";

export const Container = styled.div`
  height: 550px;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url('${IMG}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
