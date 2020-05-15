import React from "react";
import * as S from "./styles";
import BoxContent from "../BoxContent";
import PageWidth from "../PageWidth/index";
import BoxCourse from "../BoxItems/index";
import ListCourses from "./ListCourses.json";
import DigitalInnovation from "../../assets/img/digital.png";

const redirectPage = (link) => {
  window.open(`${link}`);
};

const Courses = () => {
  return (
    <BoxContent title="Cursos" style={{ backgroundColor: "#ffffff" }}>
      <PageWidth>
        {ListCourses.courses.map((item) => {
          return (
            <S.Container key={item.id}>
              <BoxCourse
                onClick={() => redirectPage(item.link)}
                icon={DigitalInnovation}
                title={item.title}
                text={item.text}
                link={item.link}
              />
            </S.Container>
          );
        })}
      </PageWidth>
    </BoxContent>
  );
};

export default Courses;
