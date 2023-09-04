import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/not-found/not-found'
import Sidebar from './components/sidebar/sidebar'
import Home from './pages/home/home'
import Explore from './pages/explore/explore'
import Notifications from './pages/notification/notifications'
import Messages from './pages/messages/messages'
import Bookmarks from './pages/bookmark/bookmarks'
import Lists from './pages/lists/lists'
import Profile from './pages/profile/profile'
import More from './pages/more/more'

const App = () => {
  return (
    <div className='w-full h-full min-h-screen bg-black flex justify-center'>
      <div className='max-w-[79.0625rem] w-[79.0625rem] h-full bg-black flex justify-center'>

        <div className='h-full w-[17.1875rem]'>
          <Sidebar/>
        </div>

        <div className='w-[37.5rem] h-full bg-black border-r border-[#2F3336]'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
            <Route path='/messages' element={<Messages/>}/>
            <Route path='/bookmarks' element={<Bookmarks/>}/>
            <Route path='/lists' element={<Lists/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/more' element={<More/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
        
      </div>
    </div>
  )
}

export default App