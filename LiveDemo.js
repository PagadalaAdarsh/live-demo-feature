import React, { useRef, useState, useEffect } from 'react';

const LiveDemo = () => {
  const videoRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log("Stream:", stream);
      if (videoRef.current) {
        console.log("videoRef.current:", videoRef.current);
        videoRef.current.srcObject = stream;
        setCameraActive(true); // Set cameraActive to true when the stream starts
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const closeCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setCameraActive(false); // Set cameraActive to false when the stream stops
    }
  };

  useEffect(() => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <div style={styles.container}>
      <h1>Live Camera Demo</h1>
      {!cameraActive ? (
        <button onClick={openCamera} style={styles.button}>
          Open Camera
        </button>
      ) : (
        <button onClick={closeCamera} style={styles.button}>
          Exit Camera
        </button>
      )}
      <video ref={videoRef} autoPlay playsInline style={styles.video}></video>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  video: {
    width: '640px', // Adjust as needed
    height: '480px', // Adjust as needed
    border: '1px solid #ccc',
  },
};

export default LiveDemo;