import React from "react"

//icons React

import { FaCode, FaTeamspeak } from "react-icons/fa"
import { BsFillAspectRatioFill } from "react-icons/bs"

const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Modernes Web",
    text: `Technologien wie React, Gatsby, Bootstrap, natürlich auch Html, Css, Javascript sehr gefragt.`,
  },
  {
    id: 2,
    icon: <BsFillAspectRatioFill className="service-icon" />,
    title: "Responsive Design",
    text: `Natürlich ist Ihre Webseite an mobile Geräte anpassbar, um das Erscheinungsbild Ihrer Webseite auf allen Tablets und Desktop-Geräten zu gewährleisten und zu pflegen..`,
  },
  {
    id: 3,
    icon: <FaTeamspeak className="service-icon" />,
    title: "Webseiten-Support und Wartung",
    text: `Wir bieten Wartung und Support nach Erhalt an, um die Stabilität, Sicherheit und Leistung Ihrer Webseite zu garantieren.`,
  },
]

export default services
