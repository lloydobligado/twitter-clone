import React from 'react'
import TopTweet from '../../assets/icons/top-tweets.svg'

const navbar = ({pageTitle}) => {
  return (
    <div className='w-full h-[3.3125rem] pl-[1rem] pr-[1rem] flex justify-between items-center border-b border-[#2F3336]'>
      <h2 className='font-sfpro text-[1.1875rem] text-[#D9D9D9] font-[700]'>{pageTitle}</h2>
      <img className='p-[0.4375rem]' src={TopTweet} alt="Top Tweet Icon" />
    </div>
  )
}

export default navbar