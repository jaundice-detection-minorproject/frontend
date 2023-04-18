import {useEffect, useState} from 'react'
import "./App.css";
import Sidebar from "./components/Sidebar";
import {  Routes, Route,useNavigate } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import Loginsignup from "./components/Loginsignup";
import {
Services,
ServicesOne,
ServicesTwo,
} from "./pages/Services";
import Camera from "./pages/Camera";
import Upload from "./pages/Upload";
import Report from "./pages/ContactUs";
import ImageModal from "./pages/ImageModal";
import Loader from './pages/Loader';
function App() {
	const [open,setOpen]=useState(false);
	const [getFiles,setFiles]=useState([]);
	const [getLoader,setLoader]=useState(false)
	const history=useNavigate()
	const verifyUser=async()=>{
		setLoader(true)
		try{
			let res=await fetch("https://reportsminorproject.glitch.me/user",{
				method:"GET",
				headers:{"token":JSON.parse(localStorage.getItem("userInfo"))}
			})
			res=await res.json()
			if(res.status){
				history("/")
			}
			else{
				history("/login")
			}
		}
		catch(e){
			history("/login")
		}
		setLoader(false)
	}
	const fecthReports = async() => {
		try{
			setLoader(true)
			let res=await fetch("https://reportsminorproject.glitch.me/reports",{
				method:"GET",
				headers:{token:JSON.parse(localStorage.getItem("userInfo"))}
			})
			res=await res.json()
			if(res.status){
				setFiles(res.files);
			}
			else{
				alert(res.err)
			}
			setLoader(false)
		}
		catch(e){

		}
	}

	useEffect(()=>{
		verifyUser()
	},[])
return (
	<>
		<ImageModal setLoader={setLoader} fecthReports={fecthReports} open={open} setOpen={setOpen}/>
		{getLoader && <Loader/>}
	<Routes>
		<Route exact path='/' element={<><Sidebar/><AboutUs/></>} />
		<Route exact path='/aim' element={<><Sidebar/><OurAim/></>} />
		<Route exact path='/vision' element={<><Sidebar/><OurVision/></>} />
		<Route exact path='/services' element={<><Sidebar/><Services  /></>} />
		<Route exact path='/services/captureImage' element={<><Sidebar/><Camera setLoader={setLoader}/></>} />
		<Route exact path='/services/uploadImage' element={<><Sidebar/><Upload setLoader={setLoader}/></>} />
		<Route exact path='/reports' element={<><Sidebar/><Report open={open} setLoader={setLoader} setOpen={setOpen} fecthReports={fecthReports} getFiles={getFiles} /></>} />
		<Route exact path='/login' element={<Loginsignup setLoader={setLoader}/>} />
	</Routes>
	</>
);
}

export default App;
