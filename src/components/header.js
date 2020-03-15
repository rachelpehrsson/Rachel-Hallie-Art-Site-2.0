import { Link } from "gatsby"
import PropTypes from "prop-types"
import './fonts.css';
import React from "react"
import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background:' #17182C',
    }}
  >

  <nav className="navbar navbar-expand-lg navbar-cinema">
    <Logo />
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Features</a>
      <a className="nav-item nav-link" href="#">Pricing</a>
  </div>
</nav>
  </header>
)

Header.propTypes = {
  siteTitle: 'Rachel Hallie Art',
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
