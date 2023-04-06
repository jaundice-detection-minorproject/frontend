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
function App() {
return (
	<Router>
	<Routes>
		<Route exact path='/about-us' element={<><Sidebar/><AboutUs/></>} />
		<Route exact path='/about-us/aim' element={<><Sidebar/><OurAim/></>} />
		<Route exact path='/about-us/vision' element={<><Sidebar/><OurVision/></>} />
		<Route exact path='/services' element={<><Sidebar/><Services/></>} />
		<Route exact path='/services/services1' element={<><Sidebar/><Camera/></>} />
		<Route exact path='/services/services2' element={<><Sidebar/><Upload/></>} />
		<Route exact path='/contact' element={<><Sidebar/><Report/></>} />
		<Route exact path='/' element={<Loginsignup/>} />
	</Routes>
	</Router>
);
}

export default App;
