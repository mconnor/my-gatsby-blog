/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from 'styled-components'
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


const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
  .active {
      color: red;
  }
`

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)

  return (
    <>
      <aside>
          <h3>Archive</h3>
          <ArchiveList>
            {data.allMarkdownRemark.edges.map(edge => ( 
                <li key={edge.node.frontmatter.slug}>
                    <Link 
                        to={`/posts${edge.node.frontmatter.slug}`}
                        activeClassName="active"
                    >{edge.node.frontmatter.title}</Link>
                </li>
            ))}
          </ArchiveList>
      </aside>
    </>
  )
}


export default Archive
