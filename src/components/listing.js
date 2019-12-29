import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'



const LISTING_QUERY = graphql`
    query BlogPostListing {
        allMarkdownRemark(limit: 10, sort: {
                order: DESC, 
                fields: [frontmatter___date]}
            ) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                    }
                    excerpt
                }
            }
        }
    }
    `


const Listing = () => {
    const data = useStaticQuery(LISTING_QUERY)

  return (
    <>
      <aside>

            {data.allMarkdownRemark.edges.map(edge => ( 
                <article key={edge.node.frontmatter.slug}>
                    <Link to={`/posts${edge.node.frontmatter.slug}`}>
                        <h2>{edge.node.frontmatter.title}</h2>
                    </Link>
                    <p>{edge.node.frontmatter.date}</p>
                    <p>{edge.node.excerpt}</p>
                    <Link to={`/posts${edge.node.frontmatter.slug}`}>
                        Read More
                    </Link>
                    
                </article>
            ))}
  
      </aside>
    </>
  )
}

export default Listing;
