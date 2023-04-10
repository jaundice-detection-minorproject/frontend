import React, { useState } from 'react';
import "../components/css/box.css";

function Upload(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [getFile,setFile]=useState(null);
  const [getData, setData] = useState({ status: false, msg: "", prob: 0 });
  const handleImageChange = (event) => {
    setData({status:false})
    const selected = event.target.files[0];
    if(!selected){return};

    setFile(selected);
    setSelectedImage(URL.createObjectURL(selected));
  };

  const handleUpload = () => {
    const reader = new FileReader();
    reader.onload = function(event) {
    const dataUrl = event.target.result;
      sendImageToServer(dataUrl);
      };
      reader.readAsDataURL(getFile);
  };
  async function sendImageToServer(dataURL) {
    props.setLoader(true)
    let data = { dataURL };
    let res = await fetch("https://jaundice-backend.onrender.com/have", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    res = await res.json();
    if (res.status) {
      setData({ status: true, msg: res.Predict === 1 ? "You have jaundice" : "You don't have jaundice", prob: 100 * res.Probability });
    }
    else {
      if (res.msg) {
        alert(res.msg);
      }
      else {
        alert("Server Error...");
      }
    }
    props.setLoader(false)
  }
  const resultStyle = {
    color: getData.prob >= 50 ? 'green' : 'red' // Function to Change color based on result percentage
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
      {getData.status && (
        <div className="result-container">
          <div className="msg" style={resultStyle}>{getData.msg}</div>
          <div className="prob">Probability: {getData.prob}%</div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Upload;