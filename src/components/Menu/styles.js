import styled from "styled-components";
import LogoIMG from "../../assets/img/Logo.jpg";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  background: #ffffff;
  padding: 10px;
`;

export const ContainerLogo = styled.div`
  width: 150px;
  height: 60px;
`;

export const Logo = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${LogoIMG}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ContainerLabel = styled.div``;
