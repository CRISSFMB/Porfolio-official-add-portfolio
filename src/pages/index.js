import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
// import Jobs from "../components/Jobs"
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
const IndexPage = ({ data }) => {
  const { nodes: projects } = data.allStrapiProjects

  return (
    <>
      <main>
        <Hero />
        <Services />
        <Projects projects={projects} title={"vorgestellt"} showLink />
      </main>
    </>
  )
}

export default IndexPage
