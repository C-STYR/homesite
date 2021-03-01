import Head from 'next/head'
import Meta from '../components/Meta'
import Layout from '../components/Layout'
import Link from 'next/link'

const Home = () => (
  <Layout>
    <div>
      <Meta title="Index"/>
      <h1>Hello, there.</h1>
      <p>
        This is the personal website of Cole Styron. It isn't much to look at, I'll grant you, but perhaps 
        have a poke around. You might find one or two things of interest if you <i>really look.</i>
      </p>
      <br />
      <p>
        As a software engineer, I spend a lot of time communicating with the machines. This pastime is not 
        without interest. Perhaps you'd like to give it a try?
      </p>
    </div>
  </Layout>
)

export default Home