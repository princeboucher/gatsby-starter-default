import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>I'm a creative.</h1>
    <p>Inspiring activists, creatives, and technologists at the intersection of civic, media, and technology peak my curiousity.</p>
    <p><a href="https://www.followtheprince.com">Follow The Prince</a> is where I've worked on projects with 300 Entertainment, AWS, Interscope, Funny or Die, Fullscreen, and UnitedHealth. In between I've been a content lead at LittleCast, Joyus, and Fin.</p>
    <p>Lately, I'm social distancing with my mask and mostly volunteering at <a href="https://www.usdigitalresponse.org">U.S. Digital Response.</a> </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <a href="https://www.twitter.com/princeboucher">Contact Me</a>
  </Layout>
)

export default IndexPage
