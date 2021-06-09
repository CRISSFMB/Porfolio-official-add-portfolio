import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/Seo"

export const query = graphql`
  query getSingleProjects($title: String) {
    strapiProjects(title: { eq: $title }) {
      title
      description
      image {
        publicURL
      }
    }
  }
`

function PageTemplate({ pageContext: { title }, data }) {
  const { description } = data.strapiProjects
  return (
    <>
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{description}</p>
      </main>
    </>
  )
}

export default PageTemplate
