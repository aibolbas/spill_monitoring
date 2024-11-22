import React from "react";
import { Link } from "react-router-dom";
import './report.css'

function Report(props){
    return(
        <>
        <div className="reportmain">
            <div className="reporthead">
                <h1>Report Incidents</h1>
            </div>
            <div className="reportmid">
                <form name="myform" action="" className="reportformcar">
                    <div className="reportform">
                        <h3>Name</h3>
                        <input type="text" className="inp" />
                        <h3>Short Description</h3>
                        <input type="text" className="inp" />
                        <h3>Photo</h3>
                        <textarea type="text" className="inp tarea" /><br/>
                        <button type="submit" className="sbm">Submit</button>
                    </div>
                    
                </form>
            </div>
            <div className="bot"></div>
        </div>
        
        </>
    )
}

export default Report