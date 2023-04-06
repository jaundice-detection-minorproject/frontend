import React, { useEffect, useState } from "react";
import axios from "axios";

const Report = () => {
	const [files, setFiles] = useState([]);

	const fecthReports = async() => {
		let token = JSON.parse(localStorage.getItem('userInfo'));
		
		const config = {
			headers: {
				"content-type": "application/json",
				token: token
			},
			mode: "cors",
		};


		try{
			let res = await axios.get('https://reportsminorproject.glitch.me/reports', config);
			setFiles(res.data.files)
		} catch(err) {
			console.log(err);
		}
	}

	useEffect(()=>{
		fecthReports();
	}, [])

return (
	<div className="contact">
	<h6>Your reports</h6>
	{
		files.map((item)=>{
			return <div>
				hello
			</div>
		})
	}
	</div>
);
};

export default Report;
