import React, { useEffect, useRef, useState } from 'react';

function WebcamCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [getDataUrl,setDataUrl]=useState(null)
  const [getData,setData]=useState({status:false,msg:"",prob:0})

  function handleStartClick() {
    setDataUrl(null)
    setData({status:false})
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
    let stream=videoRef.current.srcObject;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    sendImageToServer(dataUrl)
  };

  async function sendImageToServer(dataURL) {
    let data={dataURL}  
    let res=await fetch("https://jaundice-backend.onrender.com/have",{
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      res=await res.json()
      if(res.status){
          setData({status:true,msg:res.Predict==1?"You have jaundice":"You Don't have jaundice",prob:100*res.Probability});
      }
      else{
        if(res.msg){
          alert(res.msg)
        }
        else{
          alert("Server Error...")
        }
      }
  }

  return (
    <div>
      <video ref={videoRef} width={640} height={480} />
      <canvas ref={canvasRef} />
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleLoadedMetadata}>Capture</button>
      {getData.status && <div>
        <div>
          {getData.msg}
        </div>
        <div>
          Probability : {getData.prob}%
        </div> 
      </div>}
    </div>
  );
}

export default WebcamCapture;
