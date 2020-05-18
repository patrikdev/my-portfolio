import React, { useEffect } from "react";
import Home from "./view/Home/index";

const App = () => {
  const onScroll = () => {
    window.onscroll = () => {
      // console.log("Posição =>", window.pageYOffset);
      //POSIÇAO 86
      const position = 530;
      var getMenu = document.getElementById("container-menu");

      if (window.pageYOffset <= position) {
        getMenu.classList.remove("newMenu");
      } else {
        getMenu.classList.add("newMenu");
      }
    };
  };

  useEffect(() => {
    onScroll();
  }, []);

  return <Home />;
};

export default App;
