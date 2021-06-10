import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(socialLink => (
            <a
              key={socialLink.id}
              href={socialLink.url}
              className="social-link"
            >
              {socialLink.icon}
            </a>
          ))}
        </div>

        <h4>
          Copyright &copy; {new Date().getFullYear()}
          <span>Cristian Mosquera</span>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
