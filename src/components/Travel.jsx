import React from "react";
import '../index.css'



export default function travel(props) {
    return(
       <div className="container">
        <img src={props.img} alt="myImages" />
        <div className="travel-data">
            <div className="country-map">
                <a href="#" className="icon">{props.icon}</a>
                <h3> {props.country}</h3>
                <a href={props.location} className="location">  {props.map}</a>
            </div>
            <h1 className="title">{props.title}</h1>
            <div className="dates">
                <p>{props.startDate}</p>
                <p>{props.EndDate}</p>
            </div>
            <p className="description">
                {props.description}
            </p>
        </div>
       </div>

    )
}