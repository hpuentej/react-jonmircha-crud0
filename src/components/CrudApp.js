// imr	Import React
// imrse	Import React / useState useEffect
// ffc	Function Component
// sfc	Stateless Function Component (Arrow function)
// uef	useEffect Hook
// usf	Declare a new state variable using State Hook
// cpf	Class Property Function

import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragon",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andromeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fenix",
  },
];

const CrudApp = () => {
  let [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => { // data is the object to be added
    console.log(data)
    data.id = Date.now();
    console.log(data)
    db = db.concat(data);
    setDb(db);
  };

  const updateData = (data) => {};

  const deleteData = (id) => {};

  return (
    <>
      <h2>CRUD App</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </>
  );
};

export default CrudApp;
