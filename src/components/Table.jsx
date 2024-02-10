import { DocumentDownload } from 'iconsax-react'
import React, { useContext } from 'react'
import { ShareContext } from '../context/ShareContext'

function Table() {

    const { display } = useContext(ShareContext)

    const tableData = [
        {
            'pic': 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'name': 'Marcus Bergson',
            'date': 'Nov 15, 2023',
            'amt': 80000,
            'status': true,
        },
        {
            'pic': 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'name': 'Jaydon Vaccaro',
            'date': 'Nov 15, 2023',
            'amt': 150000,
            'status': false,
        },
        {
            'pic': 'https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'name': 'Corey Schleifer',
            'date': 'Nov 14, 2023',
            'amt': 87000,
            'status': true,
        },
        {
            'pic': 'https://images.pexels.com/photos/1405963/pexels-photo-1405963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'name': 'Cooper Press',
            'date': 'Nov 14, 2023',
            'amt': 100000,
            'status': false,
        },
        {
            'pic': 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'name': 'Phillip Lubin',
            'date': 'Nov 13, 2023',
            'amt': 78000,
            'status': true,
        },
        {
            pic: 'https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Elena Rodriguez',
            date: 'Dec 5, 2023',
            amt: 65000,
            status: false,
          },
          {
            pic: 'https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Alexandre Moreau',
            date: 'Oct 21, 2023',
            amt: 120000,
            status: true,
          },
          {
            pic: 'https://images.pexels.com/photos/5480715/pexels-photo-5480715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Sophie Williams',
            date: 'Jan 8, 2024',
            amt: 95000,
            status: false,
          },
          {
            pic: 'https://images.pexels.com/photos/2033447/pexels-photo-2033447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'David Smith',
            date: 'Feb 17, 2024',
            amt: 110000,
            status: true,
          },
          {
            pic: 'https://images.pexels.com/photos/3031396/pexels-photo-3031396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Aya Takahashi',
            date: 'Mar 30, 2024',
            amt: 75000,
            status: false,
          },
          {
            pic: 'https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Jackson Lee',
            date: 'Apr 12, 2024',
            amt: 88000,
            status: true,
          },
          {
            pic: 'https://images.pexels.com/photos/1139243/pexels-photo-1139243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Maria Gonzalez',
            date: 'May 5, 2024',
            amt: 70000,
            status: false,
          },
          {
            pic: 'https://images.pexels.com/photos/175696/pexels-photo-175696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Benjamin Kim',
            date: 'Jun 20, 2024',
            amt: 105000,
            status: true,
          },
          {
            pic: 'https://images.pexels.com/photos/3290250/pexels-photo-3290250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Emma Miller',
            date: 'Jul 7, 2024',
            amt: 92000,
            status: false,
          },
    ]

    const shortTable = tableData.slice(0, 5)

    // console.log(shortTable);

  return (
    <div className={`w-full lg:w-[65%] overflow-x-auto ${display ? 'bg-sidebarBgDark border-borderColorDark' : 'bg-white border-borderColor'} p-2 border-2 rounded-md`}>
        <div className='flex justify-between w-full items-center'>
            <h2 className='text-[20px] font-extrabold'>Last Orders</h2>
            <p className='text-main font-semibold cursor-pointer hover:scale-110 duration-150'>See All</p>
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
                    {shortTable.map((item, i) => { return (
                        <tr key={i} className={`border-t-2 ${ display ? 'border-borderColorDark' : 'border-borderColor' }`}>
                            <td className='py-4 flex items-center gap-2 text-[14px] font-semibold'>
                                <img src={item.pic} alt="User" className='w-[32px] h-[32px] rounded-full'/>
                                <p>{item.name}</p>
                            </td>
                            <td className='text-[14px] text-[#737373] py-4'>{item.date}</td>
                            <td className='text-[14px] font-semibold py-4'>${item.amt}</td>
                            <td className={`${ item.status ? 'text-main': 'text-[#ED544E]' } text-[14px] py-4`}>{item.status ? 'Paid' : 'Refund'}</td>
                            <td className='py-4 items-center gap-2 text-[14px] font-semibold flex'>
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