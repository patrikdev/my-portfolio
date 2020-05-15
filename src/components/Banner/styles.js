import styled from "styled-components";
import IMG from "../../assets/img/person.png";

export const Container = styled.div`
  height: 600px;
  background: linear-gradient(#020230, #020220);
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
  top: 180px;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: "Exo 2", sans-serif;
`;

export const TitleSize22 = styled.div`
  font-size: 24px;
  color: #282f7f;
  padding-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 74px;
  color: #3092d1;
  display: inline-block;
  vertical-align: top;
`;

export const TitleSize18 = styled.div`
  font-size: 32px;
  color: #ffffff;
  display: inline-block;
  vertical-align: bottom;
  padding: 0 30px;
  line-height: 65px;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url('${IMG}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
