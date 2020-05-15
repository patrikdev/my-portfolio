import React from "react";
import * as S from "./styles";

const MyTechnologies = (props) => {
  return (
    <S.Container className="container-my-technologies">
      <S.Image className="icon-my-thecnologies" image={props.image} />
    </S.Container>
  );
};

export default MyTechnologies;
