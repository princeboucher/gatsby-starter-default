import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Referral Program" />
    <h1>Referral Program</h1>
    <p>Refer your friends.</p>

    <div class="col form-group">

      <h5 class="h5 pt-1" id="current_text" >You are currently in spot</h5>
      <h5 class="h5 pt-1" id="current_waiter_spot"></h5>
      <h5 class="h5 pt-1" id="out_of">of</h5>
      <h5 class="h5 pt-1" id="all_waiter_spots"></h5>

      <label class="cform-label" for="rf-email" id="email_address_text"> Email address </label>
      <input class="cform-control" type="email" id="waitlist_email" placeholder="Your email" >
      <button class="btn btn-primary btn-block" type="button" id="demo_submit_button" onclick="submit_email_to_waitlist()" > Try the demo </button>

      <p class="font-size-ms text-muted" id="referral_link_url"></p>
      <button class="btn btn-primary btn-block" type="button" id="demo_referral" > Copy referral link </button>

      <p class="font-size-ms text-muted" id="filler"></p>
      <p class="font-size-ms text-muted" id="info_ref_link"></p>
      <p class="font-size-ms text-muted" id="error_message"></p>

    </div>

  </Layout>
)

export default NotFoundPage
