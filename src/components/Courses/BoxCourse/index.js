import React from "react";
import * as S from "./styles.js";
import { LogoCourse } from "./LogoCourse/index";
import TitleCourse from "./TitleCourse/index.js";
import TextCourse from "./TextCourse/index.js";

const BoxCourse = (props) => {
  return (
    <S.Container>
      <LogoCourse />
      <TitleCourse title={props.title} />
      <TextCourse text={props.text} />
    </S.Container>
  );
};

export default BoxCourse;
