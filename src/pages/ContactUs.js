import React, { useEffect, useState } from "react";
import Files from "./Files";
import "../components/css/reports.css"
const Report = (props) => {
	const fecthReports=props.fecthReports;

	useEffect(()=>{
		fecthReports();
	}, [])

return (
	<div className="reports">
		<div className="header">
		<h6>Your reports</h6>
		<div className="r-btn">
			<button onClick={()=>{props.setOpen(true)}}>Add Report</button>
		</div>
		</div>
	<div className="files">
	{
		props.getFiles.map((item)=>{
			return(
				<Files fecthReports={fecthReports} file={item}/>
			)
		})
	}
	</div>
	</div>
);
};

export default Report;
