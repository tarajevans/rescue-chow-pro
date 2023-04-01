import React, { createContext, useState } from "react";

const ListsDataContex = createContext({
    products: [],
    categories: [],
    rescues: [],
});

export function ListsDataContexProvider(props) {
  const [data, setData] = useState({
    products: "HI",
    categories: [],
    rescues: [],
  });

  // functions here

  const context = {
    data: data,
  };

  return (
    <ListsDataContex.Provider value={context}>
      {props.children}
    </ListsDataContex.Provider>
  );
}

export default ListsDataContex;
