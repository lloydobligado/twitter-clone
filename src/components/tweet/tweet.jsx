import React from 'react'
import ProfilePhoto from '../../assets/images/Profile-Photo.png'
import Verified from '../../assets/icons/verified.svg'

const tweetIcons = [
    {
        id: 1,
        icon: '../../src/assets/icons/reply.svg',
        count: 57
    },
    {
        id: 2,
        icon: '../../src/assets/icons/retweet.svg',
        count: 144
    },
    {
        id: 3,
        icon: '../../src/assets/icons/react.svg',
        count: 184
    },
    {
        id: 4,
        icon: '../../src/assets/icons/share.svg',
        count: null
    }
]

const Tweet = () => {

  const tweetAction = tweetIcons.map(tweetIcon => {
    return (
        <div className='flex text-center mr-[3.25rem]' key={tweetIcon.id}>
            <a href="#" className='m-[0.44rem]'>
                <img src={tweetIcon.icon} alt="tweet action" />
            </a>
            <p className='flex justify-center items-center mx-[0.75rem] text-[#6E767D] text-[0.8125rem] font-light'>{tweetIcon.count}</p>
        </div>
    )
  })
  return (
    <div className='w-full flex py-[0.75rem] px-[1rem] border-b border-[#2F3336]'>
        <img className='w-[3rem] h-[3rem] mr-[0.75rem] rounded-[48px]' src={ProfilePhoto} alt="Profile Photo" />

        <div className='frame w-full h-full mt-[0.31rem]'>
            <div className='tweet-title flex'>
                <h6 className='flex text-[#D9D9D9] text-[0.9375rem] font-bold'>
                    CNN
                    <img className='ml-[0.12rem]' src={Verified} alt="Verified Icon" />
                    <span className='username mx-[0.25rem] text-[#6E767D] text-[0.9375rem] font-light'>@CNN . 7m</span>
                </h6>
            </div>

            <div className='tweet-text w-full'>
                <p className='text-[#D9D9D9] text-[0.9375rem] font-normal'>
                President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.
                </p>
                <img className='mt-[0.75rem] w-[31.5rem] h-[17.71875rem] object-cover object-center rounded-[2.25rem]' src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/74ef8b173509747.64921d5038e94.jpg" alt="" srcset="" />
            </div>

            <div className='flex mt-[0.75rem]'>
                {tweetAction}
            </div>
        </div>
        
    </div>
  )
}

export default Tweet