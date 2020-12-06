import React from "react"
//Adding the "Link" component from the "gatsby" library will allow you to link internal pages
//Uses react-router beneath
import { Link } from "gatsby"
import Layout from "../components/layout"

const Bio  = () => {
    return (
        <Layout>
            <h1>This is the Bio Page!</h1>
            <Link to = "/">Back to Home</Link>
        </Layout>
    )
}

export default Bio