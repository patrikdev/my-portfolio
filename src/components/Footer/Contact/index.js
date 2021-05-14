import React from "react";
import * as S from "./styles";
import Phone from "../../../assets/svg/phone.svg";
import Mail from "../../../assets/svg/mail.svg";
import IconLabel from "./IconLabel";

export const Contact = () => {
  return (
    <S.Container className="container-contact">
      <S.ContainerTitle className="container-contact-title">
        <S.Title className="title-contact">Contato</S.Title>
      </S.ContainerTitle>
      <S.Row className="row-icon-contact">
        <IconLabel icon={Phone} label="(11) 96551-0544" />
      </S.Row>
      <S.Row className="row-icon-contact">
        <IconLabel icon={Mail} label="patrikmatos.developer@gmail.com" />
      </S.Row>
    </S.Container>
  );
};

export default Contact;
