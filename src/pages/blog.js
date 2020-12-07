import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"

const Blog = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulBlog(sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            author
            publishedDate(fromNow: true)
            slug
            title
          }
        }
      }
    }
  `)
    return (
        <Layout>
            <SEO title="Blog" />
            <h1>Blog</h1>
            <div>
                {
                    data.allContentfulBlog.edges.map((post, i) => {
                        return (
                            <div key={i}>
                                <h2>{post.node.title}</h2>
                                <p>Published {post.node.publishedDate}</p>
                                <p>Written by {post.node.author}</p>
                                <Link to={`/blog/${post.node.slug}`}>Read More...</Link>
                                <hr style={{height: "3px"}} />
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default Blog