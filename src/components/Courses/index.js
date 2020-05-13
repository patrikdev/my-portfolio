import React from "react";
import * as S from "./styles";
import BoxContent from "../BoxContent";
import PageWidth from "../PageWidth/index";
import BoxCourse from "./BoxCourse/index";
import ListCourses from "./ListCourses.json";

const Courses = () => {
  return (
    <BoxContent title="Cursos" style={{ backgroundColor: "#ffffff" }}>
      <PageWidth>
        {ListCourses.courses.map((item) => {
          return (
            <S.Container key={item.id}>
              <BoxCourse title={item.title} text={item.text} link={item.link} />
            </S.Container>
          );
        })}
      </PageWidth>
    </BoxContent>
  );
};

export default Courses;
