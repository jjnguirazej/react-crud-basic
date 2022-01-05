import axios from 'axios';
import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router';
export default function Create() {
  //Inicializames as variaveis com estados vazios ou falso
  //so pode-se usar hoook com componentes funcionais, por isso configura-se os sets
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    let navigate = useNavigate();
    //Passando os dados directamente
    const postData = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(checkbox);
    }
//Usando Axios para enviar dados por Api
    const PostData = () => {
      axios.post(`https://61d4a0258df81200178a8dba.mockapi.io/crudData`, {
          firstName,
          lastName,
          checkbox
      })
      .then(() => {
        navigate('/read')
    })
  }
  

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={PostData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}