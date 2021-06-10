import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        description
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

const About = ({ data: about }) => {
  const { title, description, stack, image } = about.allStrapiAbout.nodes[0]

  return (
    <>
      <section className="about-page">
        <div className="section-center about-center">
          <GatsbyImage
            image={getImage(image)}
            className="about-img-svg"
            alt={title}
          />

          <article className="about-text">
            <Title title={title} />
            <p>{description}</p>
            <div className="about-stack">
              {stack.map(stack => (
                <span key={stack.id}>{stack.title}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default About
