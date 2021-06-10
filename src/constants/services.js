import React from "react"

//icons React

import { FaCode, FaCheckCircle } from "react-icons/fa"
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
    text: `Ein responsives Design macht Ihre Webseite für alle Benutzer zugänglich, unabhängig von ihrem Gerät`,
  },
  {
    id: 3,
    icon: <FaCheckCircle className="service-icon" />,
    title: "Schnelle Webseiten",
    text: `Erstellung von schnellen Webseiten durch Nutzung bester Technologien `,
  },
]

export default services
