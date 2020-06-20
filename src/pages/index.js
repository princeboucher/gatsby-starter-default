import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Prince Boucher" />
    <h1>I'm a creative.</h1>
    <p>I'm inspired with collaborating with activists, creatives, and technologists at the intersection of community, media, and technology.</p>
    <p>I've been running <a href="https://www.followtheprince.com">Follow The Prince</a> for over ten years working with brands like 300 Entertainment, AWS, Interscope, Funny or Die, Fullscreen, and UnitedHealth. In between I've been a first marketing hire at LittleCast, Joyus, and Fin.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <a href="https://www.twitter.com/princeboucher">Contact Me</a>
    <a href="https://www.princeboucher.com/page-2/">
  </Layout>
)

export default IndexPage
