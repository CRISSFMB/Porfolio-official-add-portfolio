import React from "react"
import links from "../constants/links"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleHamburger }) => {
  return (
    <aside className={isOpen ? " sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleHamburger}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : null}>
          {links.map(link => (
            <li key={link.id}>
              <Link to={link.url} onClick={toggleHamburger}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <ul className={isOpen ? "social-links sidebar-icons" : null}>
          {socialLinks.map(link => (
            <a key={link.id} href={link.url} className="social-link">
              {link.icon}
            </a>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
