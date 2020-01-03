/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Image from '../components/image';
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import { useSpring, animated, config } from 'react-spring'
import Header from "./header"
import Archive from "./archive"
import styled from 'styled-components';
import "./layout.css";

const MainLayout = styled.div`
    max-width: 90%;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 4fr 1fr;
`;

// TODO figure out how to distiguish if going from post to post
const Layout = ({ children, location }) => {


    const { height } = useSpring({
        from: {height: location.pathname === '/' ? 100 : 200},
        to: {height: location.pathname  === '/' ? 200 : 100 },
    });



  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />

         <animated.div style={{overflow:'hidden', border: '1px solid blue', height}}>
             <Image img="lilWildMan" />
        </animated.div>
    
     
      <MainLayout>
        <div>{children}</div>
        <Archive />
      </MainLayout>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
    location: {},
  }
  


export default Layout
