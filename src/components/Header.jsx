import { ArrowDown2, Calendar, Notification, SearchNormal } from 'iconsax-react'
import React from 'react'
import Pfp from '../assets/pexels-nappy-936119.jpg'

function Header() {
  return (
    <header className='flex justify-between items-center py-[18px] px-[20px] border-b-2 border-borderColor'>
        <h2 className='text-text text-xl font-bold'>Dashboard</h2>
        <section className='flex'>
          <div>
            <SearchNormal color='#0D062D' variant='Broken'/>
            <input type="text" placeholder='Search...' />
          </div>
          <div className='flex'>
            <div>
              <Calendar variant='Linear' color='#000' />
              <p>November 15, 2023</p>
            </div>
            <div>
              <Notification variant='Linear' color='#000' />
            </div>
            <div className='flex'>
              <div className='flex'>
                <img src={Pfp} alt='Profile' className='w-[40px] h-[40px] rounded-full'/>
                <div>
                  <h2>Justin Bergson</h2>
                  <p>Justin@gmail.com</p>
                </div>
              </div>
              <ArrowDown2 color='#000' />
            </div>
          </div>
        </section>
    </header>
  )
}

export default Header