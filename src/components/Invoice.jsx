import React, { useContext } from 'react'
import { ShareContext } from '../context/ShareContext'

function Invoice() {
    const { display, invoice, setShowInv } = useContext(ShareContext)

    // console.log(invoice);

  return (
    <div className={`w-full md:w-[40%] overflow-x-auto ${display ? 'bg-sidebarBgDark border-borderColorDark' : 'bg-white border-borderColor'} p-4 border-2 rounded-md`}>
        <h2 className='text-[18px] font-extrabold text-center'>Invoice for <span>{invoice.name}</span></h2>
        <div className='mt-2 w-full flex flex-col gap-2'>
            <div className={`flex justify-between items-center border-b-2 ${display ? 'border-borderColorDark' : ' border-borderColor pb-2'}`}>
                <p className='text-[14px]'>Name</p>
                <p className='font-bold text-[14px]'>{invoice.name}</p>
            </div>
            <div className={`flex justify-between items-center border-b-2 ${display ? 'border-borderColorDark' : ' border-borderColor pb-2'}`}>
                <p className='text-[14px]'>Order Date</p>
                <p className='font-bold text-[14px]'>{invoice.date}</p>
            </div>
            <div className={`flex justify-between items-center border-b-2 ${display ? 'border-borderColorDark' : ' border-borderColor pb-2'}`}>
                <p className='text-[14px]'>Order Amount</p>
                <p className='font-bold text-[14px]'>${invoice.amt}</p>
            </div>
            <div className={`flex justify-between items-center border-b-2 ${display ? 'border-borderColorDark' : ' border-borderColor pb-2'}`}>
                <p className='text-[14px]'>Status</p>
                <p className={`font-bold text-[14px] ${invoice.status ? 'text-main' : 'text-[#ED544E]'}`}>{invoice.status ? 'Paid' : 'Refund'}</p>
            </div>
        </div>
        <div className='mt-3 flex w-full justify-between items-center'>
            <button onClick={() => window.print()} className='bg-main rounded-md p-2 text-white cursor-pointer hover:bg-transparent hover:text-main duration-200 text-[14px]'>Print Invoice</button>
            <button onClick={() => setShowInv(false)} className='bg-[#ED544E] rounded-md p-2 text-white cursor-pointer hover:bg-transparent hover:text-[#ED544E] duration-200 text-[14px]'>Close</button>
        </div>
    </div>
  )
}

export default Invoice