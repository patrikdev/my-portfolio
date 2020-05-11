import React from "react";
import * as S from "./styles";

const MyTechnologies = (props) => {
  return (
    <S.Container>
      <S.Image image={props.image} />
    </S.Container>
  );
};

export default MyTechnologies;
