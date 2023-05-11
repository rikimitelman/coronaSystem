import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const [id, setId] = useState('');
  const [person, setPerson] = useState(null);
  const navigate = useNavigate()

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleGetPerson = () => {
    axios.get(`/person/${id}`)
      .then(response => {
        setPerson(response.data);
        navigate('/Home')
      })
      .catch(error => {
        console.log(error);
        navigate('/Home')
      });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label>
          ID:
          <input type="text" value={id} onChange={handleIdChange} />
        </label>
        <button type="button" onClick={handleGetPerson}>Get Person</button>
      </form>
      {person && (
        <div>
          <h2>Person Details</h2>
          <p>Name: {person.fullName}</p>
          <p>Address: {person.address.city}, {person.address.street} {person.address.number}</p>
          <p>Date of Birth: {person.date_of_birth}</p>
          <p>Phone: {person.phone}</p>
          <p>Mobile Phone: {person.mobile_phone}</p>
        </div>
      )}
    </div>
  );
}

export default SignIn;