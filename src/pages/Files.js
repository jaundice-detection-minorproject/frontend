import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "../components/css/files.css"
import Swal from 'sweetalert2';
export default function Files(props) {
  const handleDelete=async()=>{
      props.setLoader(true)
      let res=await fetch(`https://reportsminorproject.glitch.me/reports/?file_id=${props.file._id}`,{
        method:"delete",
        headers:{"content-type":"application/json",token:JSON.parse(localStorage.getItem("userInfo"))},
      })
      res=await res.json()
      props.setLoader(false)
      if(res.status){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Report Deleted SuccessFully...",
          showConfirmButton: false,
          timer: 2000,
        });
        props.fecthReports();
      }
      else{
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: res.err,
          showConfirmButton: false,
          timer: 2000,
        });
      }
  }
  return (
    <div className='files-main' >
        <div className='file-sub'>
            <div className='folder-img' onClick={()=>{window.open(`https://reportsminorproject.glitch.me/reports/download/${JSON.parse(localStorage.getItem("userInfo"))}/${props.file._id}`)}}>
                <img src='/folder.png'/>
            </div> 
            <div className='file-footer'>

            <div className='files-title' onClick={()=>{window.open(`https://reportsminorproject.glitch.me/reports/download/${JSON.parse(localStorage.getItem("userInfo"))}/${props.file._id}`)}}>
                {props.file.title}
            </div>
            <div className='file-delete-btn'>
                  <DeleteIcon onClick={handleDelete}/>
            </div>
            </div>
        </div>
    </div>
  )
}
