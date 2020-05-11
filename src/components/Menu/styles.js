import styled from "styled-components";
import LogoIMG from "../../assets/img/logo.png";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 99;
  padding: 5px;
  background: rgba(0, 0, 0, 0.2);
`;

export const ContainerLogo = styled.div`
  width: 120px;
  height: 60px;
  display: inline-block;
  vertical-align: top;
`;

export const Logo = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${LogoIMG}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ContainerLabel = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 87%;
  text-align: right;
  line-height: 60px;
`;

export const Label = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 16px;
  color: #ffff;
  margin-right: 20px;
  font-weight: bold;
`;
