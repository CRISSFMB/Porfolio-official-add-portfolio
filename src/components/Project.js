import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({
  description,
  feature,
  github,
  id,
  index,
  slug,
  stack,
  title,
  url,
  image,
}) => {
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(image)}
        className="project-img"
        alt={title}
      />
    </article>
  )
}

export default Project
