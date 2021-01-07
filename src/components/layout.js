import React from "react"
import { Link } from "gatsby"
import {Helmet} from "react-helmet";
import NavBar from "./navBar/navBar";
import { rhythm, scale } from "../utils/typography"
import CookieConsent from 'react-cookie-consent';

const HEAP_APPID = '3572316639'


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
        <Helmet>
          <script type="text/javascript">{`
            window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};   
          `}</script>
        </Helmet>

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
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          enableDeclineButton={true}
          declineButtonText="Decline"
          style={{ background: "#115571" }}
          buttonStyle={{ background: "#7CBAB7" }}
          onAccept={() => {
            window.heap.load(HEAP_APPID)
          }}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
    </React.Fragment>
  )
}

export default Layout
