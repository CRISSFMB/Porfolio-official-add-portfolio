import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ projectsData, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projectsData?.map((project, index) => (
          <Project key={project.id} {...project} index={index} />
        ))}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          Projekte
        </Link>
      )}
    </section>
  )
}

export default Projects
