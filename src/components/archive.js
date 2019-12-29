/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"



const POST_ARCHIVE_QUERY = graphql`
    query BlogPostArchive {
        allMarkdownRemark(limit: 2, sort: {
            order: DESC,
		        fields: [frontmatter___date]
        }) {
            edges {
                node {
                    frontmatter {
                        slug
                        title
                    }
                }
            }
        }
    }`

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)

  return (
    <>
      <aside>
          <h3>Archive</h3>
          <ul>
            {data.allMarkdownRemark.edges.map(edge => ( 
                <li key={edge.node.frontmatter.slug}>
                    <Link to={`/posts${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
                    
                </li>
            ))}
          </ul>
      </aside>
    </>
  )
}


export default Archive
