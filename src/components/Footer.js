import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div className="Footer">

        <div className="details">
          <div className="link-container">
            <FontAwesomeIcon icon={faEnvelope} />
            <h4 className="link">an.pineau12@gmail.com</h4>
          </div>
          <div className="link-container">
            <FontAwesomeIcon icon={faPhone} />
            <h4 className="link">+33 6 83 59 57 88</h4>
          </div>
        </div>

        <div className="socials">
          <a href="https://github.com/AnPineau" aria-label="github AnPineau"><FontAwesomeIcon className="icon" icon={faGithub} /></a>

          <a href="https://www.linkedin.com/in/antoine-pineau-280615132/" aria-label="linkedin antoine-pineau-280615132"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
        </div>

        <h5 className="copyright">Antoine Pineau © 2020</h5>

    </div>
  )
}
