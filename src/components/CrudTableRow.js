import React from 'react';

const CrudTableRow = ({element}) => {
  return (
    <>
      <tr>
        <td>{element.name}</td>
        <td>{element.constellation}</td>
        <td><button>Editar</button><button>Eliminar</button></td>
      </tr>
    </>
  );
}
 
export default CrudTableRow;