import React,{createContext,useState} from 'react'

const ImageContext=createContext();
//בשורה זו, הפונקציה `createContext` משמשת ליצירת אובייקט `ImageContext`
//אשר ישמש להעברת ערכי המצב `image` ו-`setImage` לרכיבים אחרים באמצעות ה-{id -10}.


const ImageProvider=({children})=> {
    const [image, setImage] = useState(null);
     return (
      <ImageContext.Provider value={{ image, setImage }}>
        {children}
      </ImageContext.Provider>
        //רכיב זה יאפשר לרכיבי צאצא אחרים לגשת למשתנים אלה באמצעות ה-`useContext`.
    );
  }
  export  {ImageContext, ImageProvider };
  