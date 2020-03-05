import React from "react" 
import Logo from "../images/logo cropped.png"
import { Link } from "gatsby"


export default() => (
	 <Link
          to="/"

        >
         	<img className="navbar-brand" src={Logo} style = {{width:120}}/>
        </Link>

	)