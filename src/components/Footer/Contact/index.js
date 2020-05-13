import React from "react";
import * as S from "./styles";
import Phone from "../../../assets/img/phone.png";
import Mail from "../../../assets/img/mail.png";

export const Contact = () => {
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Title>Contato</S.Title>
      </S.ContainerTitle>
      <S.ContainerNumbers>
        <S.Row>
          <S.ContainerIcon>
            <S.Icon icon={Phone} />
          </S.ContainerIcon>
          <S.ContainerLabel>
            <S.Label>
              <S.Label>(11)96551-0544</S.Label>
            </S.Label>
          </S.ContainerLabel>
        </S.Row>
        <S.Row>
          <S.ContainerIcon>
            <S.Icon icon={Mail} />
          </S.ContainerIcon>
          <S.ContainerLabel>
            <S.Label>
              <S.Label>(11)96551-0544</S.Label>
            </S.Label>
          </S.ContainerLabel>
        </S.Row>
      </S.ContainerNumbers>
    </S.Container>
  );
};

export default Contact;
