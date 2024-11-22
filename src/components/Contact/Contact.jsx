import React from "react";
import Card from "../Card/card";
import Report from "../form/report";
import './contact.css'

function Contact() {
    return(
        <>
        <div className="contactmain">
            <div className="contacthead">
                <h1>We'd Love to Hear From You</h1>
                <h3>Wheather You are Curious About Oil Ecology</h3>
            </div>
            <div className="cardplace">
                <Card name='Telephone' des='+77777777777'></Card>
                <Card name='Work Mail' des='Spill@Free.com'></Card>
                <Card name='Instagram' des='@Spill_Free'></Card>
                <Card name='Youtube' des='Spill Free'></Card>
            </div>
            <Report></Report>
        </div>
        
        </>
    )
}

export default Contact