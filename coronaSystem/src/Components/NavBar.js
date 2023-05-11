import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

export default function NavBar(props)
{
  const [backgroundImage, setBackgroundImage] = useState("");
  // const [backgroundImage, setBackgroundImage] = useState(`url(${props.imageSrc})`);
  useEffect(() => {
    setBackgroundImage(`url(${props.imageSrc})`);
    console.log("changed")
  }, []);


//   const [imageSrc, setImageSrc] = useState('');

//  const componentDidMount=() =>{
//     this.fetchUserFromServer();
//   }
// async function fetchUserFromServer() {
//     try {
//       const response = await axios.get(`/api/users/${this.state.userId}`);
//       const user = response.data;
//       this.setImageSrc({ image: user.image });
//     } catch (err) {
//       console.error(err);
//       this.setImageSrc({ error: err.message });
//     }
//   }
    return<>
        <header>
  <nav>
  {/* <p class="profile"style={{ backgroundImage: `url(${props.imageSrc})` }}  ></p> */}
  <p className="profile" style={{ backgroundImage }}>{/* ... */}</p>
    <div className="logo">
        corona system
    </div>
    <img src={props.imageSrc} alt="Preview" style={{ width: "100px" }} />
    <ul>
       <li><Link to='/Home'    className="link">Home</Link></li>
       <li><Link to='/SignIn'  className="link">SignIn</Link></li>
       <li><Link to='/Manager' className="link">Manager</Link></li>
       <li><Link to='/ImageUploader' className="link">set Image Profile</Link></li>      
    </ul>
  </nav> 
</header>
</>
} 