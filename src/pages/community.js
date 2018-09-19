import React from 'react'

import Layout from '../components/layout'
import Contact from '../styles/Contact'
import Footer from '../styles/Footer'
import Hero from '../components/Community/Hero'
import Events from '../components/Community/Events'
import Stories from '../components/Community/Stories'
import Opportunities from '../components/Community/Opportunities'
import Resources from '../components/Community/Resources'

export default () => (
  <Layout>
    <Hero />
    <Events />
    <Stories />
    <Opportunities />
    <Resources />
    <Contact />
    <Footer />
  </Layout>
)
