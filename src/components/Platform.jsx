import React, { useContext } from 'react'
import { ShareContext } from '../context/ShareContext'
import { CloseCircle } from 'iconsax-react'

function Platform({ platform, isPop }) {
    const { display, setShowPlatforms } = useContext(ShareContext)

  return (
    <div className={`${isPop ? 'w-[90%] lg:w-[35%]' : 'w-full lg:w-[35%]'} overflow-x-auto ${display ? 'bg-sidebarBgDark border-borderColorDark' : 'bg-white border-borderColor'} p-2 border-2 rounded-md ${isPop ? 'h-2/3' : 'h-auto'}`}>
        <div className='flex justify-between w-full items-center'>
            <h2 className='text-[16px] font-extrabold'>Top Platform</h2>
            { isPop ? <CloseCircle size='24' color='#ED544E' variant='Bulk' className='cursor-pointer hover:scale-110 duration-150' onClick={() => setShowPlatforms(false)} /> : <p className='text-main font-semibold cursor-pointer hover:scale-110 duration-150 text-[14px]' onClick={() => setShowPlatforms(true)}>See All</p>}
        </div>
        <div className='w-full px-2'>
            {
                platform.map((item, i) => { return (
                    <div className='w-full mt-4' key={i}>
                        <h2 className='text-[16px] font-semibold'>{item.title}</h2>
                        <div className={`relative w-full mt-3 ${display ? 'bg-[#283142]' :'bg-[#F5F5F5]'} h-2 rounded-xl`}>
                            <div className={`${item.width} h-full ${item.color} rounded-xl`}></div>
                        </div>
                        <div className='mt-3 flex justify-between items-center'>
                            <p className={`text-[14px] ${display ? 'text-[#F5F5F5]' : 'text-[#525252]'}`}>${item.price}</p>
                            <p className={`text-[14px] ${display ? 'text-[#F5F5F5]' : 'text-[#525252]'}`}>+{item.percent}%</p>
                        </div>
                    </div>
                )})
            }
            
        </div>
    </div>
  )
}

export default Platform