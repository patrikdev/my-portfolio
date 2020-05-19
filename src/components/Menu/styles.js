import styled from "styled-components";
import LogoWhite from "../../assets/img/logo.png";
import LogoBlack from "../../assets/img/logoBlack.png";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 99;
  padding: 5px;
  font-family: "Open Sans", sans-serif;

  &.newMenu {
    transition: 0.3s;
    background: #ffffff;
    box-shadow: 0 1px 5px #bbb;

    .logo {
      background-image: url('${LogoBlack}');
    }

    .item-menu {
      color: #000;
    }
  }

  
`;

export const ContainerLogo = styled.div`
  width: 120px;
  display: inline-block;
  vertical-align: top;

  @media (max-width: 798px) {
    width: 100%;
  }
`;

export const Logo = styled.div`
  margin: auto;
  width: 120px;
  height: 60px;
  background-image: url('${LogoWhite}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  

`;

export const ContainerItems = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 82%;
  text-align: right;
  line-height: 60px;

  @media (max-width: 798px) {
    display: none;
  }
`;
