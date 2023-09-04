import React from 'react';
import Navbar from '../../components/navbar/navbar';
import TweetEditor from '../../components/tweet-editor/tweet-editor';
import Tweet from '../../components/tweet/tweet';

const HomePage = () => {
  return (
    <>
      <Navbar pageTitle="HomePage" />
      <TweetEditor />
      <Tweet />
      <Tweet />
    </>
  );
};

export default HomePage;
