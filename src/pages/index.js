import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className = "banner" style={{
          margin: "0px",
          height:"500px",
          position:"relative",
        }}>
    <div className = "home-banner"></div>
</div>
   
  </Layout>
)

export default IndexPage
