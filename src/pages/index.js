import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Applied Generalist.</h1>
    <p>Inspiring activists, creatives, and technologists at the intersection of civic, media, and technology peak my curiousity.</p>
    <p><a href="https://www.followtheprince.com">Follow The Prince</a> is where I've worked on projects with 300 Entertainment, AWS, Interscope, Funny or Die, Fullscreen, and UnitedHealth. In between I've been a content lead at LittleCast, Joyus, and Fin.</p>
    <p>Over the past couple of years I've joined several communities that have been helpful in my development and growth as a pesrson and entrepreneur. Special shout out to the <a href="www.globalshapers.org">Global Shapers Community</a>, <a href="www.fedtech.io">FedTech</a>, <a href="www.beondeck.com">On Deck</a>, and <a href="www.southparkcommons.com">South Park Commons</a>.</p>
    <p>Lately, I'm social distancing with my mask and mostly volunteering at <a href="https://www.usdigitalresponse.org">U.S. Digital Response.</a> </p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <a href="https://www.twitter.com/princeboucher">Contact Me</a>
  </Layout>
)

export default IndexPage
