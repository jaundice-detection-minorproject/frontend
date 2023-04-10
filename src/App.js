import {useState} from 'react'
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
return (
	<Router>
		<ImageModal setLoader={setLoader} fecthReports={fecthReports} open={open} setOpen={setOpen}/>
		{getLoader && <Loader/>}
	<Routes>
		<Route exact path='/about-us' element={<><Sidebar/><AboutUs/></>} />
		<Route exact path='/about-us/aim' element={<><Sidebar/><OurAim/></>} />
		<Route exact path='/about-us/vision' element={<><Sidebar/><OurVision/></>} />
		<Route exact path='/services' element={<><Sidebar/><Services  /></>} />
		<Route exact path='/services/services1' element={<><Sidebar/><Camera setLoader={setLoader}/></>} />
		<Route exact path='/services/services2' element={<><Sidebar/><Upload setLoader={setLoader}/></>} />
		<Route exact path='/contact' element={<><Sidebar/><Report open={open} setLoader={setLoader} setOpen={setOpen} fecthReports={fecthReports} getFiles={getFiles} /></>} />
		<Route exact path='/' element={<Loginsignup setLoader={setLoader}/>} />
	</Routes>
	</Router>
);
}

export default App;
