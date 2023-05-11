import { Navigate, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import NavBar from'./NavBar'
import Manager from'./Manager'
import SignIn from'./SignIn'
import Home from'./Home'
import ImageUploader from "./ImageUploader";

export default function Routers(){
    const [imageSrc, setImageSrc] = useState("");
    const handleUploadSuccess = (imageSrc) => {
        setImageSrc(imageSrc);
      };
    return <div>
        <NavBar/>
        <Routes>
            <Route path='SignIn' element={<SignIn/>}></Route>
            <Route path='Manager' element={<Manager/>}></Route>
            <Route path='Home' element={<Home/>}></Route>
            <Route path='ImageUploader' element={<ImageUploader handleUploadSuccess={handleUploadSuccess}/>}></Route>
            <Route path='/' element={<Navigate to='./Home' imageSrc={imageSrc}/>}></Route>
        </Routes>
    </div>
}