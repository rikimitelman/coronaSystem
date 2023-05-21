import {Link} from 'react-router-dom'
import React, { useContext } from 'react';
import { ImageContext } from './ImageContext';
import './Style.css';

export default function NavBar(props)
{
const { image, setImage} = useContext(ImageContext);
//`useContext`הוק  המאפשר לו לגשת לערכי `image` ו-`setImage` מהרכיב `ImageContext`
let imageUrl = null;
if(image)
  imageUrl = URL.createObjectURL(image);
    return<>
        <header>
  <nav>
    <div className="logo">
        corona system
    </div>
    {imageUrl &&<img src={imageUrl} alt={image.name}  style={{ width: "100px" }}/>}
    <ul>
       <li><Link to='/Home'    className="link">Home</Link></li>
       <li><Link to='/SignIn'  className="link">SignIn</Link></li>
       <li><Link to='/Manager' className="link">Manager</Link></li>
       <li><Link to='/CoronaSummary' className="link">coronaSummary</Link></li>
       <li><Link to='/ImageUploader' className="link">set Image Profile</Link></li>      
    </ul>
  </nav> 
</header>
</>
} 