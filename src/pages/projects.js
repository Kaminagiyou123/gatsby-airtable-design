import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, Projects, Algolia } from '../components'

const ProjectsPage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Wrapper>
      <Layout>
        <Projects titel="our projects" projects={projects} page />
        <Algolia/>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      sort: { order: DESC, fields: data___date }
    ) {
      nodes {
        data {
          name
          type
          title
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        id
      }
    }
  }
`

export default ProjectsPage
