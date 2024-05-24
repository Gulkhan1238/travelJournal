import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


import '../App.css'
import '../index.css'
export default function Nav(){
    return(
        <div className="nav-el">
            <a href="#"><FontAwesomeIcon icon={faGlobe} /></a>
      <h2> Gulraiz Travel Journal </h2>
</div>
    )
}