import React from "react";
import * as S from "./styles";
import Phone from "../../../assets/svg/phone.svg";
import Mail from "../../../assets/svg/mail.svg";
import IconLabel from "./IconLabel";

export const Contact = () => {
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Title>Contato</S.Title>
      </S.ContainerTitle>
      <S.Row>
        <IconLabel icon={Phone} label="(11) 96551-0544" />
      </S.Row>
      <S.Row>
        <IconLabel icon={Mail} label="patrikmatos.tecinfo@gmail.com" />
      </S.Row>
    </S.Container>
  );
};

export default Contact;
