import { data } from "autoprefixer";
import React, { createContext, useState } from "react";


const ListsDataContex = createContext({
    products: [],
    categories: [],
    rescues: [],
    loadRescues: function (rescues) {},
});


export function ListsDataContexProvider(props) {
  const [data, setData] = useState({
    products: [],
    categories: [],
    rescues: [{test:"test"}],
  });

  const loadRescues = (rescues) => {
    setData({
      ...data,
      rescues: rescues,
    });
  }

  // functions here

  const context = {
    data: data,
    loadRescues:loadRescues,
  };

  return (
    <ListsDataContex.Provider value={context}>
      {props.children}
    </ListsDataContex.Provider>
  );
}

export default ListsDataContex;
