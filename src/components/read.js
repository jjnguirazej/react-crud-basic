import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
  const [APIData, setAPIData] = useState([]);

//Usamos o user efect para enviar um get no endpoint da api
//quando ele tiver o resultado capturamos a resposta recolhida
//armazenamos numa variavel e mudamos o seu estado
useEffect(() => {
  axios.get(`https://61d4a0258df81200178a8dba.mockapi.io/crudData`)
      .then((response) => {
          setAPIData(response.data);
      })
}, [])

// const setData = (data) => {
//   console.log(data);
// }


// Destruturacao de dados
const setData = (data) => {
  let { id, firstName, lastName, checkbox } = data;
  localStorage.setItem('ID', id);
  localStorage.setItem('First Name', firstName);
  localStorage.setItem('Last Name', lastName);
  localStorage.setItem('Checkbox Value', checkbox)
}

const onDelete = (id) => {
  axios.delete(`https://61d4a0258df81200178a8dba.mockapi.io/crudData/${id}`)
  .then(() => {
    getData();
})
}

//Temos que carregar os dados depois de apagar
const getData = () => {
  axios.get(`https://61d4a0258df81200178a8dba.mockapi.io/crudData`)
      .then((getData) => {
           setAPIData(getData.data);
       })
}
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>delete</Table.HeaderCell>
                    
                    </Table.Row>
                </Table.Header>

                <Table.Body>

  {/* Mapeamos os dados recolhidos no getApi e preenchemso a tabela */}
  {APIData.map((data) => {
     return (
       <Table.Row>
          <Table.Cell>{data.firstName}</Table.Cell>
           <Table.Cell>{data.lastName}</Table.Cell>
           <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
           <Link to='/update'>
            <Table.Cell> 
              <button onClick={() => setData(data)}>Update</button>
            </Table.Cell>
            </Link>
            <Table.Cell>
              <button onClick={() => onDelete(data.id)}>Delete</button>
            </Table.Cell>
          
        </Table.Row>
   )})}
</Table.Body>
            </Table>
        </div>
    )
}