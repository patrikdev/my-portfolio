import React from "react";
import * as S from "./styles";
import BoxContent from "../BoxContent";
import PageWidth from "../PageWidth/index";

const MyExperiences = () => {
  return (
    <BoxContent title="Experiências" style={{ backgroundColor: "#f9f9fc" }}>
      <PageWidth>
        <S.Container></S.Container>
      </PageWidth>
    </BoxContent>
  );
};

export default MyExperiences;
