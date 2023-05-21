import React, { useState } from 'react';
import axios from './Axios';

function AddPerson() {
    const [id, setId] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [mobilePhone, setMobilePhone] = useState('');

    const handleIdChange = (event) => {
        console.log(event.target.value)
        setId(event.target.value);
      };

      const handleMobilePhoneChange = (event) => {
        console.log(event.target.value)
        setMobilePhone(event.target.value);
      };

      const handlePhoneChange = (event) => {
        console.log(event.target.value)
        setPhone(event.target.value);
      };

      const handleFullNameChange = (event) => {
        console.log(event.target.value)
        setFullName(event.target.value);
      };
      const handleAddPerson = () => {
        const newPerson = { fullName:fullName, identity:id,phone:phone,mobilePhone:mobilePhone };
        console.log("adding person"+newPerson.fullName)
        axios.get(`/person/`,newPerson)
              .then(response => {
                console.log("new person added "+response.data)
                console.log("adding person xxx"+newPerson.fullName)
          })
          .catch(error => {
            console.log(error);
          });
      };
                
    return (<div>
         <input type="text" value={id} onChange={handleIdChange} />
         <input type="text" value={fullName} onChange={handleFullNameChange} />
         <input type="text" value={phone} onChange={handlePhoneChange} />
         <input type="text" value={mobilePhone} onChange={handleMobilePhoneChange} />
         <button onClick={handleAddPerson}>Add Person</button>
    </div>)
}

export default AddPerson;