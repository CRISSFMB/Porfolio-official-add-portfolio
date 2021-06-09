import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        title
        description
        feature
        github
        id
        url
        slug
        stack {
          id
          title
        }
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
const ProjectsPage = ({ data }) => {
  const { nodes: projectsData } = data.allStrapiProjects

  return (
    <>
      <main>
        <Projects
          projectsData={projectsData}
          title={"Alle Projekte"}
          showLink={false}
        />
      </main>
    </>
  )
}

export default ProjectsPage
