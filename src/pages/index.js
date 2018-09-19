import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Home/Hero/Hero'
import Capture from '../components/Home/Capture/Capture'
import Compare from '../components/Home/Compare/Compare'
import Contact from '../styles/Contact'
import Footer from '../styles/Footer'

const IndexPage = () => (
  <Layout>
    <Hero />
    <Capture />
    <Compare />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
