import React from "react"
import { Link } from "gatsby"
import NavBar from "./navBar/navBar";

import { rhythm, scale } from "../utils/typography"
import CookieConsent from 'react-cookie-consent';


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <React.Fragment>
        <NavBar />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(36),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}
            {` `}
            <a href="https://nanoporetech.com">Oxford Nanopore Technologies</a>
          </footer>
        </div>
    </React.Fragment>
    //<CookieConsent
    //  location="bottom"
    //  buttonText="Accept"
    //  declineButtonText="Decline"
    //  cookieName="gatsby-gdpr-google-analytics"
    //  style={{ background: "#115571" }}
    //  buttonStyle={{ background: "#7CBAB7" }}>
    //This website uses cookies to enhance the user experience.
    //</CookieConsent>
  )
}

export default Layout
