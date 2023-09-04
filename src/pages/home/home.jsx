import React from 'react'
import Navbar from '../../components/navbar/navbar'
import TweetEditor from '../../components/tweet-editor/tweet-editor'
import Tweet from '../../components/tweet/tweet'

const Home = () => {
  return (
    <>
      <Navbar pageTitle = "Home"/>
      <TweetEditor />
      <Tweet />
      <Tweet />

    </>
  )
}

export default Home