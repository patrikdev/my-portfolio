import styled from "styled-components";
import IMG from "../../assets/img/person.png";

export const Container = styled.div`
  background: linear-gradient(#020230, #020220);
  height: 600px;
`;

export const Col = styled.div`
  width: 50%;
  display: inline-block;
  vertical-align: top;
`;

export const ContainerImage = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 130px;
  right: 50px;
`;

export const ContainerLabels = styled.div`
  position: relative;
  top: 180px;

  @media (max-width: 1218px) {
    left: 30px;
  }
`;

export const TitleSize22 = styled.div`
  font-size: 24px;
  color: #282f7f;
  padding-bottom: 20px;

  @media (max-width: 1020px) {
    font-size: 18px;
    padding-bottom: 0;
  }
`;

export const Title = styled.div`
  font-size: 74px;
  color: #3092d1;
  display: inline-block;
  vertical-align: top;

  @media (max-width: 1020px) {
    font-size: 52px;
    /* display: block; */
  }
`;

export const Title2 = styled.div`
  font-size: 74px;
  color: #3092d1;
  display: inline-block;
  vertical-align: top;

  @media (max-width: 1020px) {
    font-size: 52px;
    display: block;
    /* display: block; */
  }
`;

export const TitleSize18 = styled.div`
  font-size: 32px;
  color: #ffffff;
  display: inline-block;
  vertical-align: bottom;
  padding: 0 30px;
  line-height: 65px;

  @media (max-width: 1020px) {
    font-size: 18px;
    line-height: 50px;
    padding: 0 15px;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url('${IMG}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
