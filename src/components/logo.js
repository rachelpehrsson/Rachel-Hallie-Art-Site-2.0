import React from "react" 
import Logo from "../images/logo cropped.png"
import { Link } from "gatsby"


export default() => (
	 <Link
          to="/"

        >
         	<img src={Logo} style = {{width:120}}/>
        </Link>

	)