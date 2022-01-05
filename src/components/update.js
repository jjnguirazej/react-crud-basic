import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    let navigate = useNavigate();

    // Vamos usar useEffect para obter os dados gravados anteriormente na memoria Local. 
    //E vamos criar um estado para o campo ID.
    const [id, setID] = useState(null);

    useEffect(() => {
      setID(localStorage.getItem('ID'))
      setFirstName(localStorage.getItem('First Name'));
      setLastName(localStorage.getItem('Last Name'));
      setCheckbox(localStorage.getItem('Checkbox Value'))
}, []);

const updateAPIData = () => {
  axios.put(`https://61d4a0258df81200178a8dba.mockapi.io/crudData/${id}`, {
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
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={updateAPIData} type='submit'>Update</Button>
            </Form>
        </div>
    )
}