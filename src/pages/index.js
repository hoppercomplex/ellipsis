import React from "react"

import SEO from "../components/seo"
import "../components/style.css"
import Menu from "../components/menu"
import Footer from "../components/footer"

import Link from "gatsby-link"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <div>
    <Menu />
    <SEO title="Home" />
    <div className="home">
      <div className="home-branding">
        <img
          src={require("../images/logo.png")}
          alt="ellipsis logo"
          width="384px"
        />
        <p>
          Because thoughts may pause <br />
          but never end ...
        </p>
        <a href="#posts">
          <button>posts</button>
        </a>
      </div>
    </div>
    <div className="span" id="posts" />
    <div className="posts">
      <div className="container">
        <div className="post-heading">
          <h2>Latest Posts</h2>
          <span className="post-heading-accent">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
        {data.allMarkdownRemark.edges
          .map(post => (
            <div key={post.node.id}>
              <Link to={post.node.frontmatter.path}>
                <h3>{post.node.frontmatter.title}</h3>
              </Link>
              <small>
                Posted by{" "}
                <span class="author">{post.node.frontmatter.author}</span> on{" "}
                {post.node.frontmatter.date}
              </small>
              <br />
              <br />
              <span className="read-more">
                <Link to={post.node.frontmatter.path}>Read More</Link>
              </span>
              <br />
              <br />
              <hr />
            </div>
          ))
          .splice(0, 3)}
      </div>
    </div>
    <div id="footer">
      <Footer />
    </div>
  </div>
)

export const pageQuery = graphql`
  query HomePageLinksQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
            date
          }
        }
      }
    }
  }
`

export default IndexPage
