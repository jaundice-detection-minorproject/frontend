import React from 'react'
import Modal from '@mui/material/Modal';
import { CirclesWithBar } from 'react-loader-spinner'
const style = {
  position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border:'none',
  // boxShadow: 24,
  p: 4,
};

export default function Loader() {
  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>

    <CirclesWithBar
  height="80"
  width="80"
  radius="5"
  color="white"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
  </div>
  </Modal>
  </div>
  )
}
