import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className = "banner" style={{
          margin: "0px",
          height:"85vh",
          position:"relative",
        }}>
    <div className = "home-banner">
    	<div className = "container" style ={{
    		textAlign:"center",
    	}}>Rachel Hallie Art</div>
    </div>
</div>
   
  </Layout>
)

export default IndexPage
