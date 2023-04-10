import React, { useEffect, useRef, useState } from 'react';
import "../components/css/WebcamCapture.css";

const WebcamCapture = (props) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [getDataUrl, setDataUrl] = useState(null);
  const [getData, setData] = useState({ status: false, msg: "", prob: 0 });

  function handleStartClick() {
    setDataUrl(null);
    setData({ status: false });
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => console.error(error));
  }
  
  const handleLoadedMetadata = () => {
    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    canvasRef.current.getContext('2d').drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    const dataUrl = canvasRef.current.toDataURL();
    let stream = videoRef.current.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    sendImageToServer(dataUrl)
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
    <div className="body">
      <div className='cont'>
      <div className="video-container">
        <video ref={videoRef} />
      </div>
      <div className="video-container" >
        <canvas ref={canvasRef} />
      </div>
      </div>
      <div className="button-container">
        <button onClick={handleStartClick}>Start</button>
        <button onClick={handleLoadedMetadata}>Capture</button>
      </div>
      {getData.status && (
        <div className="result-container">
          <div className="msg" style={resultStyle}>{getData.msg}</div>
          <div className="prob">Probability: {getData.prob}%</div>
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
