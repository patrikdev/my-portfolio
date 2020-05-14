import styled from "styled-components";
import IMG from "../../assets/img/person.png";

export const Container = styled.div`
  height: 600px;
  background: #020230;
`;

export const Col = styled.div`
  width: 50%;
  display: inline-block;
  vertical-align: top;
`;

export const ContainerImage = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  top: 170px;
  left: 120px;
  right: 0;
  bottom: 0;
`;

export const ContainerTitle = styled.div`
  position: relative;
  top: 170px;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Title = styled.div`
  font-size: 65px;
  color: #ffffff;
  font-weight: 700;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url('${IMG}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
