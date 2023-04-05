import React, { useState } from 'react';
import "../components/css/box.css";

function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const selected = event.target.files[0];
    setSelectedImage(URL.createObjectURL(selected));
  };

  const handleUpload = () => {
    // Implement image upload logic here
    console.log("Upload button clicked");
  };

  return (
    <div className="containeru">
      <div className="box">
        <h1>Select or Upload an Image</h1>
        <input
          id="select-btn"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <label htmlFor="select-btn" className="btn">
          Select Image
        </label>
        {selectedImage && (
          <>
            
            <img src={selectedImage} alt="Selected" />
            <button id="upload-btn" className="btn" onClick={handleUpload}>
              Upload Image
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Upload;