import React, { useContext } from 'react'
import Logo from '../assets/Logo.png'
import { Category, TrendUp, Profile2User, Box, DiscountShape, InfoCircle, Moon, Sun1, Setting2, Logout, ArrowCircleRight2 } from 'iconsax-react'
import { ShareContext } from '../context/ShareContext'

function Sidebar() {

    const { display, setDisplay } = useContext(ShareContext)

    // console.log(display);

  return (
    <section className={`${display ? 'bg-sidebarBgDark' : 'bg-sidebarBg' } w-[80px] flex flex-col justify-between h-screen items-center py-[20px] sticky left-0 top-0 duration-300 border-r-2 ${ display ? 'border-borderColorDark' : 'border-borderColor'}`}>
        <section className='w-full'>
            <nav className='w-full'>
                <ul className='flex flex-col items-center gap-[16px] w-full'>
                    <li>
                        <img src={Logo} alt='Company Logo' className='cursor-pointer w-[40px] h-[40px] duration-200 ease-in-out hover:-translate-y-2'/>
                    </li>
                    <li className='group icons active'>
                        <Category size="24" color={display ? '#FFF' : '#0D062D'} variant="Bulk"/>
                        <div className={`h-0 w-1 ${ display ? 'bg-white' : 'bg-navRight'} absolute right-0 rounded-l-lg duration-200 group-hover:h-5`}></div>
                    </li>
                    <li className='group icons'>
                        <TrendUp size="24" color={display ? '#FFF' : '#B2ABAB'} variant="Broken"/>
                        <div className={`h-0 w-1 ${ display ? 'bg-white' : 'bg-navRight'} absolute right-0 rounded-l-lg duration-200 group-hover:h-5`}></div>
                    </li>
                    <li className='group icons'>
                        <Profile2User size="24" color={display ? '#FFF' : '#B2ABAB'} variant="Broken"/>
                        <div className={`h-0 w-1 ${ display ? 'bg-white' : 'bg-navRight'} absolute right-0 rounded-l-lg duration-200 group-hover:h-5`}></div>
                    </li>
                    <li className='group icons'>
                        <Box size="24" color={display ? '#FFF' : '#B2ABAB'} variant="Broken"/>
                        <div className={`h-0 w-1 ${ display ? 'bg-white' : 'bg-navRight'} absolute right-0 rounded-l-lg duration-200 group-hover:h-5`}></div>
                    </li>
                    <li className='group icons'>
                        <DiscountShape size="24" color={display ? '#FFF' : '#B2ABAB'} variant="Broken"/>
                        <div className={`h-0 w-1 ${ display ? 'bg-white' : 'bg-navRight'} absolute right-0 rounded-l-lg duration-200 group-hover:h-5`}></div>
                    </li>
                    <li className='group icons'>
                        <InfoCircle size="24" color={display ? '#FFF' : '#B2ABAB'} variant="Broken"/>
                        <div className={`h-0 w-1 ${ display ? 'bg-white' : 'bg-navRight'} absolute right-0 rounded-l-lg duration-200 group-hover:h-5`}></div>
                    </li>
                    <li className={`h-[92px] w-[46px] rounded-3xl flex flex-col items-center p-[8px] justify-between ${ display ? 'bg-black' : 'bg-white'}`}>
                        <div className={`${ display ? '' : 'bg-main'} rounded-full p-1 cursor-pointer duration-200`} onClick={() => setDisplay(false)}>
                            <Sun1 size="24" color="#FFF" variant="Bold"/>
                        </div>
                        <div className={`${ display ? 'bg-main' : ''} rounded-full p-1 cursor-pointer duration-200`} onClick={() => setDisplay(true)}>
                            <Moon size="24" color={display ? '#FFF' : '#B2ABAB'} variant="Bold"/>
                        </div>
                    </li>
                </ul>
            </nav>
        </section>
        <section>
            <nav className='w-full'>
                <ul className='flex flex-col items-center gap-[16px] w-full'>
                    <li className='icons'>
                        <ArrowCircleRight2 size="24" color={display ? '#FFF' : '#B2ABAB'} variant="Broken"/>
                    </li>
                    <li className='icons'>
                        <Setting2 size="24" color={display ? '#FFF' : '#B2ABAB'} variant="Broken"/>
                    </li>
                    <li className='icons'>
                        <Logout size="24" color={display ? '#FFF' : '#B2ABAB'} variant="Broken"/>
                    </li>
                </ul>
            </nav>
        </section>
    </section>
  )
}

export default Sidebar