import styled from "styled-components";
import LogoIMG from "../../assets/img/logo.png";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 99;
  padding: 5px;
  background: #000000;
`;

export const ContainerLogo = styled.div`
  width: 150px;
  height: 60px;
`;

export const Logo = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${LogoIMG}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ContainerLabel = styled.div``;
