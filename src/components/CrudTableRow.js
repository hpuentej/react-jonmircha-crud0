import React from 'react';

const CrudTableRow = ({element, setDataToEdit, deleteData}) => {
  let {name, constellation, id} = element;
  
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td>
          <button onClick={() => setDataToEdit(element)}>Editar</button>
          <button onClick={() => deleteData(id)}>Eliminar</button></td>
      </tr>
    </>
  );
}
 
export default CrudTableRow;