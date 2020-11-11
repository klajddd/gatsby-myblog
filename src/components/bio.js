/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (

        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <b>
          <p></p>
          <a href={`https://klakaraj.com/` } style={{"text-decoration": "none"}} >
            Resume &nbsp;
          </a> 
          <a href={`https://www.linkedin.com/in/klajdkaraj`} style={{"text-decoration": "none"}}>
            LinkedIn &nbsp;
          </a>
          <a href={`https://github.com/klajddd`} style={{"text-decoration": "none"}}>
          Github
          </a>
          </b>
        </p>
      )}
    </div>
  )
}

export default Bio
