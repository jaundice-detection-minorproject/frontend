import {useRef, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import "../components/css/imagemodal.css"
import Swal from 'sweetalert2';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ImageModal(props) {
    const [getTitle,setTitle]=useState("")
    const [getFile,setFile]=useState(null)
    const fileRef=useRef();
    const handleChange=(file)=>{
        if(!file.target.files[0]){
            setFile(null)
            return
        }
        setFile(file.target.files[0]);
    }
    const handleClick=async()=>{
        if(getTitle==""){
          Swal.fire({
            position: "top-left",
            icon: "error",
            title: "Enter Some Title...",
            showConfirmButton: false,
            timer: 2000,
            });
            return
        }
        if(!getFile){
          Swal.fire({
            position: "top-left",
            icon: "error",
            title: "Select Some File....",
            showConfirmButton: false,
            timer: 2000,
            });
            return;
        }
        props.setLoader(true)
        let formdata=new FormData();
        formdata.append("title",getTitle);
        formdata.append("report_file",getFile);
        let res=await fetch("https://reportsminorproject.glitch.me/reports",{
            method:"POST",
            headers:{"token":JSON.parse(localStorage.getItem("userInfo"))},
            body:formdata
        })
        res=await res.json();
        props.setLoader(false)
        if(res.status){
            props.setOpen(false);
            props.fecthReports()
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Report Added Successfully...",
                showConfirmButton: false,
                timer: 2000,
              });
        }
        else{
            Swal.fire({
                position: "top-left",
                icon: "error",
                title: res.err,
                showConfirmButton: false,
                timer: 2000,
              });
        }
    }
  return (
    <div>
      <Modal
        open={props.open}
        onClose={()=>{props.setOpen(!props.open)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className='main-div-m'>
                <div className='sub-div-m'>
                    <div className='m-heading'>
                            Add New Report
                    </div>
                    <div className='m-text'>
                        <TextField fullWidth label="Report Title" onChange={(e)=>{setTitle(e.currentTarget.value)}} variant='outlined' />
                    </div>
                    <div className='m-btn'>

                    <div className='m1-btn'>
                        <input ref={fileRef} onChange={handleChange} type='file' style={{display:"none"}} />
                        <button style={{backgroundColor:getFile?"red":"blue"}}  onClick={()=>{fileRef.current.click()}}>Report File</button>
                    </div>
                    <div className='m-upload-btn'>
                        <button onClick={handleClick}>Add Report</button>
                    </div>
                    </div>
                </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}