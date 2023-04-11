import React from 'react'
import Modal from '@mui/material/Modal';
import { CirclesWithBar } from 'react-loader-spinner'
const style = {
  position: 'absolute',
  top: '55%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
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
