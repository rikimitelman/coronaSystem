import React, { useState } from 'react';


function Manager() {
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

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
        
    } else {
      alert('You must be an administrator to perform this action');
    }
  };
  const handleAddPerson=()=>{
    if(isAdmin){
        
    }
    else{
        alert('You must be an administrator to perform this action');
    }
  }
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
    </div>
  );
}

export default Manager;


