import React, { useState } from 'react';
import axios from './Axios';
import AddPerson from './AddPerson';


function Manager() {
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [persons, setPersons] = useState(null);
  const [addNewPerson, setAddNewPerson] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (password === '1234') {
      setIsAdmin(true);
    }
  };

  const handleGetAllPersons = () => {
    if (isAdmin) 
    { 
      setAddNewPerson(false)
      axios.get(`/person/`)
      .then(response => {
        console.log("data "+response.data)
        setPersons(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    } else {
      alert('You must be an administrator to perform this action');
    }
  };
 const handleAddPerson=()=>{
  setAddNewPerson(true)
 }

  // const handleAddPerson=()=>{
  //   if(isAdmin){
  //     axios.post(`/person/`)
  //     .then(response => {
  //       console.log("data "+response.data)
  //   setPerson(response.data);
  // })
  // .catch(error => {
  //   console.log(error);
  // });
  //   }
  //   else{
  //       alert('You must be an administrator to perform this action');
  //   }
  // }
  return (
    <div>
      <h1>Manager</h1>
      <form onSubmit={handlePasswordSubmit}>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isAdmin && (
        <div>
          <button onClick={handleGetAllPersons}>Get All Persons</button>
          <button onClick={handleAddPerson}>add person</button>
        </div>
      )}
        {persons && (
          <div>
            {persons.map((item, index) => (
                      <div key={index}>
                      <p>Full Name: {item.fullName}</p>
                      <p>Identity: {item.identity}</p>
                      <p>---------------------------------</p>
                    </div>
            ))}
          </div>
        )
        }
        {addNewPerson &&(
          <AddPerson/>
        )}
    </div>
  );
}

export default Manager;


