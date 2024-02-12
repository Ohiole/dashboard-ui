import { ArrowDown2, ArrowUp2, Calendar, LockCircle, Menu, MessageEdit, Notification, SearchNormal1, User } from 'iconsax-react'
import React, { useContext, useState } from 'react'
import Pfp from '../assets/pexels-nappy-936119.jpg'
import { ShareContext } from '../context/ShareContext'

function Header() {
  const { display } = useContext(ShareContext)

  const [menu, setMenu] = useState(false)
  const [notif, setNotif] = useState(false)

  const [nav, setNav] = useState(false)

  const openMenu = () => {
    setMenu(!menu)

    if (notif) {
      setNotif(false)
    }
  }

  const openNotif = () => {
    setNotif(!notif)

    if (menu) {
      setMenu(false)
    }
  }

  return (
    <header className={`flex justify-between items-center py-[18px] px-[20px] border-b-2 ${ display ? 'border-borderColorDark' : 'border-borderColor'} relative z-40`}>
        <h2 className={`${ display ? 'text-white' : 'text-text' } text-xl font-bold`}>Dashboard</h2>
        <section className={`flex flex-col lg:flex-row items-start lg:py-0 py-16 lg:px-0 md:px-8 px-2 lg:items-center gap-5 absolute lg:relative h-screen lg:h-auto ${display ? 'bg-sidebarBgDark border-borderColorDark': 'bg-sidebarBg border-borderColor'} border-l-2 lg:border-l-0 lg:bg-transparent right-0 top-0 ${ nav ? 'md:w-1/2 w-full opacity-100' : 'w-0 overflow-hidden lg:opacity-100 opacity-0'} lg:w-auto duration-300 z-40`}>
          <div className={`flex gap-2 w-full lg:w-[300px] border-2 ${ display ? 'border-borderColorDark' : 'border-borderColor'} p-[10px] rounded-3xl items-center`}>
            <SearchNormal1 color='#78828A' variant='Broken' size='18'/>
            <input type="text" placeholder='Search...' className={`bg-transparent outline-none w-full ${ display ? 'text-white' : 'text-text' }`} id='search'/>
          </div>
          <div className='flex lg:flex-row flex-col items-start lg:items-center gap-[20px] lg:w-auto w-full'>
            <div className='flex items-center gap-3 cursor-pointer'>
              <Calendar variant='Linear' color={display ? '#FFF' : '#000'} />
              <p className={`text-sm font-semibold ${display ? 'text-white' : 'text-text'}`}>November 15, 2023</p>
            </div>
            <div className={`cursor-pointer relative w-[40px] h-[40px] flex items-center justify-center rounded-full border-2 ${ display ? 'border-borderColorDark' : 'border-borderColor'} relative`} onClick={() => openNotif()}>
              <Notification variant='Linear' color={display ? '#FFF' : '#000'}  size='24'/>
              <div className={`absolute top-[50px] left-0 ${ display ? 'bg-sidebarBgDark text-white' : 'bg-white text-text' } shadow-lg rounded-md py-2 px-3 w-[200px] h-[100px] flex items-center justify-center ${notif ? 'scale-100' : 'scale-0'} duration-200 z-50`}>
                <p className='text-sm text-center'>No Notifications yet!</p>
              </div>
            </div>
            <div className={`flex  items-center border-2 ${ display ? 'border-borderColorDark' : 'border-borderColor'} gap-4 p-1 rounded-full`}>
              <div className='flex items-center gap-3 justify-between relative'>
                <img src={Pfp} alt='Profile' className='w-[40px] h-[40px] rounded-full'/>
                <div className='text-right'>
                  <h2 className={` ${display ? 'text-white' : 'text-text'}`}>Justin Bergson</h2>
                  <p className='text-[#787486] text-sm'>Justin@gmail.com</p>
                </div>
                <div className={`absolute top-[50px] left-0 ${ display ? 'bg-sidebarBgDark text-white' : 'bg-white text-text' } shadow-lg rounded-md py-2 px-3 w-[200px] ${menu ? 'scale-100' : 'scale-0'} duration-200 z-50`}>
                  <ul className='w-full'>
                    <li className='w-full flex mt-2 p-2 gap-2 items-center text-sm cursor-pointer duration-150'>
                      <User color={display ? '#FFF' : '#000'}  size='24' />
                      <p>Profile</p>
                    </li>
                    <li className='w-full flex mt-2 p-2 gap-2 items-center text-sm cursor-pointer duration-150'>
                      <LockCircle color={display ? '#FFF' : '#000'}  size='24' />
                      <p>Password</p>
                    </li>
                    <li className='w-full flex mt-2 p-2 gap-2 items-center text-sm cursor-pointer duration-150'>
                      <MessageEdit color={display ? '#FFF' : '#000'}  size='24' />
                      <p>Change Mail</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='cursor-pointer' onClick={() => openMenu()}>
                {
                  menu ? <ArrowUp2 color={display ? '#FFF' : '#000'}  size='20' />  : <ArrowDown2 color={display ? '#FFF' : '#000'}  size='20' />
                }
              </div>
            </div>
          </div>
        </section>
        <Menu size='24' color={display ? '#FFF' : '#000'} className={`cursor-pointer block lg:hidden z-50`} onClick={() => setNav(!nav)}/>
    </header>
  )
}

export default Header