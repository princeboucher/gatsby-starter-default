import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Prince Boucher" />
    <h1>I'm a creative technologist.</h1>
    <p>I'm inspired with collaborating with activists, creatives, and technologists at the intersection of community, media, and technology.</p>
    <p>I've been running Follow The Prince for over ten years. In between I've been a first marketing hire at LittleCast, Joyus, and Fin.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="https://www.twitter.com/princeboucher">Contact Me</Link>
  </Layout>
)

export default IndexPage
