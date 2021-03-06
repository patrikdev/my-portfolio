import React from "react";
import * as S from "./styles";
import PageWidth from "../PageWidth/index";
import BoxCourse from "../BoxItems/index";
import ListCourses from "./ListCourses.json";
import DigitalInnovation from "../../assets/img/digital.png";
import Title from "../Title/index";

const redirectPage = (link) => {
  window.open(`${link}`);
};

const Courses = () => {
  return (
    <S.Container id="section-courses" className="container-courses">
      <PageWidth>
        <Title title="Cursos" />
        {ListCourses.courses.map((item) => {
          return (
            <S.ContainerBox className="container-box-course" key={item.id}>
              <BoxCourse
                onClick={() => redirectPage(item.link)}
                icon={DigitalInnovation}
                title={item.title}
                text={item.text}
                link={item.link}
              />
            </S.ContainerBox>
          );
        })}
      </PageWidth>
    </S.Container>
  );
};

export default Courses;
