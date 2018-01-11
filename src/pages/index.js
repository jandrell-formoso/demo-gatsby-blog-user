import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>Index Page list...</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/counter">Go to counter</Link>
    <h2>List of Pages:</h2>
    {
      data.allMarkdownRemark.edges.map(post => (
        <div>
          <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
        </div>
      ))
    }
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

export default IndexPage
