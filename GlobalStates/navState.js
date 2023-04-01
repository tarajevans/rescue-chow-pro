import React, { createContext, useState } from "react";

const UseNavContext = createContext({
  turnOffNav : function () {},
  turnOnNav : function () {},
});



export function UseNavContextProvider(props) {
  const [useNav, setUseNav] = useState(true);

  const turnOffNav = () => {
    setUseNav(false);
  }
  const turnOnNav = () => {
    setUseNav(true);
  }

  const context = {
    useNav: useNav,
    turnOffNav: turnOffNav,
    turnOnNav: turnOnNav
  };

  return (
    <UseNavContext.Provider value={context}>
      {props.children}
    </UseNavContext.Provider>
  );
}

export default UseNavContext;
