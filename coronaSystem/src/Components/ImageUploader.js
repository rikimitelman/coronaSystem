import React, { useState,useContext } from "react";
import { ImageContext } from './ImageContext';
import axios from "axios";

const ImageUploader = (props) => {
    const [preview, setPreview] = useState(null);
    const [error, setError] = useState(null);
    const { image, setImage} = useContext(ImageContext);
  
    const handleImageChange = (event) => {
      const selectedImage = event.target.files[0];
      setImage(selectedImage);
      //הוא מקבל את התמונה שנבחרה באמצעות `event.target.files[0]` 
      // ומגדיר אותה כערך המצב `image` באמצעות הפונקציה `setImage
     
      if (selectedImage) {
        const reader = new FileReader();//המיר את התמונה שנבחרה לכתובת URL של נתונים
        reader.readAsDataURL(selectedImage);
        reader.onloadend = () => {
          setPreview(reader.result);
        };
      } else {
        setPreview(null);
      }
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      //למנוע את שליחת הטופס המוגדר כברירת מחדל

      if (!image) {
        setError("Please select an image to upload.");
        return;
      }
      const formData = new FormData();
      formData.append("image", image);
      try {
        //מכיל את קובץ התמונה ושולח אותו לשרת באמצעות בקשת POST דרך `axios.post`
        await axios.post(`/api/users/${props.userId}/image`, formData);
        setError(null);
      }
      catch (err) {
        setError(err.response.data);
      }
    };

  const onSubmitImage= ()=>{
    //handleUploadSuccess?
    props.handleUploadSuccess(preview)
  }
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="image">Select an image:</label>
            <input type="file" id="image" name="image" onChange={handleImageChange} />
          </div>
          {preview && (
            <div>
              <img src={preview} alt="Preview" style={{ width: "100px" }} />
            </div>
          )}
          <button type="submit" onClick={onSubmitImage}>Upload</button>
        </form>
      </div>
    );
  };
  

export default ImageUploader;
// ייתכן שיהיה רעיון טוב להשתמש בספריית דחיסת תמונות כדי לייעל את תהליך העלאת התמונה.