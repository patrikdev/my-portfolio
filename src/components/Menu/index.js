import React from "react";
import * as S from "./styles";
import PageWidth from "../PageWidth/index";
import MenuItems from "./MenuItems.json";
import MenuItem from "./MenuItem";

const moveScroll = (elementSelector) => {
  const element = document.querySelector(elementSelector);
  const position = element.offsetTop;

  window.scroll({
    top: position,
    behavior: "smooth",
  });
};

const Menu = () => {
  return (
    <S.Container>
      <PageWidth>
        <S.ContainerLogo>
          <S.Logo />
        </S.ContainerLogo>
        <S.ContainerItems>
          {MenuItems.menuItems.map((item) => {
            return (
              <MenuItem
                key={item.id}
                label={item.label}
                onClick={() => moveScroll(item.route)}
              />
            );
          })}
        </S.ContainerItems>
      </PageWidth>
    </S.Container>
  );
};

export default Menu;
