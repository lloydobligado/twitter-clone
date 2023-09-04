import React from 'react'
import ProfilePhoto from '../../assets/images/Profile-Photo.png'

const metaIcons = [
    {
        icon: '../../src/assets/icons/media.svg'
    },
    {
        icon: '../../src/assets/icons/gif.svg'
    },
    {
        icon: '../../src/assets/icons/poll.svg'
    },
    {
        icon: '../../src/assets/icons/emoji.svg'
    },
    {
        icon: '../../src/assets/icons/schedule.svg'
    },

]

const tweetEditor = () => {
  
  const metas = metaIcons.map(metaIcon => {
    return (
        <img className='m-[0.44rem]' key={metaIcon.icon} src={metaIcon.icon} alt="Meta" />
    )
  })
  return (
    <div className='w-full h-[7.4375rem] flex border-b border-[#2F3336]'>
        <img className='w-[3rem] h-[3rem] ml-4 mt-1 mr-[0.12rem] rounded-[48px]' src={ProfilePhoto} alt="Profile Photo" />
        <div className='w-[516rem] h-full pt-[1rem] mr-4 flex flex-col justify-between'>
            <input 
                className='w-full indent-2.5 bg-black text-[1.25rem] placeholder-[#6E7E7D] text-[#6E7E7D]' 
                type="text" 
                placeholder="What's happening?"
            />

            <button className='w-full h-[2.25rem] flex'>
                {metas}
            </button>
        </div>
    </div>
  )
}

export default tweetEditor