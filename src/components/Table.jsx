import { CloseCircle, DocumentDownload } from 'iconsax-react'
import React, { useContext } from 'react'
import { ShareContext } from '../context/ShareContext'

function Table({ table, isPop }) {

    const { display, setOpenTable, setInvoice, setShowInv } = useContext(ShareContext)

    const picked = (i) => {
      setShowInv(true)
      const pickedInvoice = table.find((item) => item.name === i)

      setInvoice(pickedInvoice)
    }

  return (
    <div className={`w-full lg:w-[65%] overflow-x-auto ${display ? 'bg-sidebarBgDark border-borderColorDark' : 'bg-white border-borderColor'} p-2 border-2 rounded-md ${isPop ? 'h-2/3' : 'h-auto'}`}>
        <div className='flex justify-between w-full items-center'>
            <h2 className='text-[20px] font-extrabold'>Last Orders</h2>
            { isPop ? <CloseCircle size='24' color='#ED544E' variant='Bulk' className='cursor-pointer hover:scale-110 duration-150' onClick={() => setOpenTable(false)}/> : <p className='text-main font-semibold cursor-pointer hover:scale-110 duration-150' onClick={() => setOpenTable(true)}>See All</p>}
        </div>
        <div className='w-full overflow-x-auto mt-4'>
            <table className='w-full text-left'>
                <thead className='w-full'>
                    <tr className='text-[#9CA4AB]'>
                        <th className='font-medium py-4'>Name</th>
                        <th className='font-medium py-4'>Date</th>
                        <th className='font-medium py-4'>Amount</th>
                        <th className='font-medium py-4'>Status</th>
                        <th className='font-medium py-4'>Invoice</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((item, i) => { return (
                        <tr key={i} className={`border-t-2 ${ display ? 'border-borderColorDark' : 'border-borderColor' }`}>
                            <td className='py-4 flex items-center gap-2 text-[14px] font-semibold'>
                                <img src={item.pic} alt="User" className='w-[32px] h-[32px] rounded-full'/>
                                <p>{item.name}</p>
                            </td>
                            <td className='text-[14px] text-[#737373] py-4'>{item.date}</td>
                            <td className='text-[14px] font-semibold py-4'>${item.amt}</td>
                            <td className={`${ item.status ? 'text-main': 'text-[#ED544E]' } text-[14px] py-4`}>{item.status ? 'Paid' : 'Refund'}</td>
                            <td className='py-4 items-center gap-2 text-[14px] font-semibold flex cursor-pointer' onClick={() => picked(item.name)}>
                                <DocumentDownload size='16' color={ display ? '#FFF' :'#292D32'} variant='Outline' />
                                View
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table