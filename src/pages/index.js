import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../pages/home.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my blog!</h1>
    <h3>I'm Daniel Quintanilla and I'm currently a student of Richland College. 
      I'm pursuing in web design in order to learn some programming skills that will land me into my first job.</h3>
    <h3>On October 31, 2019, I've visited the Dallas Arboretum for the first time as an adult in order to obtain some pictures for my drawing class. 
      I've been enthralled by the beautiful display of the garden, which is why I've decided to create this blog to showcase some of my favorite moments there!</h3>
  </Layout>
)

export default IndexPage