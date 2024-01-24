import React from 'react'
import Logo from '../assets/Logo.png'
import { Category, TrendUp, Profile2User, Box, DiscountShape, InfoCircle, Moon, Sun1, Setting2, Logout, ArrowCircleRight2 } from 'iconsax-react'

function Sidebar() {
  return (
    <section className=''>
        <section>
            <img src={Logo} alt='Company Logo' className='cursor-pointer w-[40px] h-[40px]'/>
            <nav>
                <ul>
                    <li>
                        <Category size="24" color="#0D062D" variant="Bulk"/>
                        <div></div>
                    </li>
                    <li>
                        <TrendUp size="24" color="#B2ABAB" variant="Broken"/>
                        <div></div>
                    </li>
                    <li>
                        <Profile2User size="24" color="#B2ABAB" variant="Broken"/>
                        <div></div>
                    </li>
                    <li>
                        <Box size="24" color="#B2ABAB" variant="Broken"/>
                        <div></div>
                    </li>
                    <li>
                        <DiscountShape size="24" color="#B2ABAB" variant="Broken"/>
                        <div></div>
                    </li>
                    <li>
                        <InfoCircle size="24" color="#B2ABAB" variant="Broken"/>
                        <div></div>
                    </li>
                    <li>
                        <Sun1 size="24" color="#B2ABAB" variant="Bold"/>
                        <Moon size="24" color="#B2ABAB" variant="Bold"/>
                    </li>
                </ul>
            </nav>
        </section>
        <section>
            <nav>
                <ul>
                    <li>
                        <ArrowCircleRight2 size="24" color="#B2ABAB" variant="Broken"/>
                    </li>
                    <li>
                        <Setting2 size="24" color="#B2ABAB" variant="Broken"/>
                    </li>
                    <li>
                        <Logout size="24" color="#B2ABAB" variant="Broken"/>
                    </li>
                </ul>
            </nav>
        </section>
    </section>
  )
}

export default Sidebar