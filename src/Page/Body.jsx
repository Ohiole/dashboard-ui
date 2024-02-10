import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import ReactApexChart from 'react-apexcharts'
import { ShareContext } from '../context/ShareContext'
import { ArrowDown2, ArrowUp2 } from 'iconsax-react'
import Table from '../components/Table'
import Invoice from '../components/Invoice'

function Body() {
    const { display, openTable, showInv } = useContext(ShareContext)

    const [chartTextColor, setChartTextColor] = useState('#525252')

    const [chartSpec, setChartSpec] = useState('Monthly')

    const [chartInfo, setChartInfo] = useState({
      'categories': ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
      'seriesData': [8000, 18000, 3500, 28000, 9000, 45000, 9000, 20000, 32000, 4000, 30000, 26000],
    })
    
    useEffect(() => {
      if (display) {
        setChartTextColor('#FFF')
      } else {
        setChartTextColor('#525252')
      }
    }, [display])

    useEffect(() => {
      switch (chartSpec) {
        case 'Weekly':
          setChartInfo({ 
            'categories': ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
            'seriesData': [600, 2200, 150, 1900, 700, 3600, 900, 3000, 4500, 500]
          })
          break;
        case 'Daily':
          setChartInfo({ 
            'categories': ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
            'seriesData': [20, 32, 4, 30, 26, 45, 90, ]
          })
          break;
        case 'Yearly':
          setChartInfo({ 
            'categories': [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            'seriesData': [400000, 3000000, 2600000, 4500000, 900000, 2000000, 3200000, 400000, 3000000, 2600000, 4500000, 900000, 2000000, 3200000, 400000]
          })
          break;
        default:
          setChartInfo({ 
            'categories': ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
            'seriesData': [8000, 18000, 3500, 28000, 9000, 45000, 9000, 20000, 32000, 4000, 30000, 26000]
          })
          break;
      }
    }, [chartSpec])

    const [isToggleOpen, setIsToggleOpen] = useState(false)

    const chartData = {
      options: {
        chart: {
          id: 'custom-bar-chart',
          type: 'bar',
        },
        xaxis: {
          categories: chartInfo.categories,
          labels: {
            style: {
              colors: chartTextColor,
              fontSize: '14px',
              fontFamily: 'Plus Jakarta Sans'
            }
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: chartTextColor,
              fontSize: '14px',
              fontFamily: 'Plus Jakarta Sans'
            }
          },
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            borderRadius: chartSpec === 'Daily' ? 40 : chartSpec === 'Weekly' ? 30 : chartSpec === 'Yearly' ? 20 : 22,
            borderRadiusApplication: 'end',
          }
        },
        states: {
          hover: {
            filter: {
                type: 'lighten',
                value: 0.1,
            }
          },
        },
        fill: {
          colors: ['#34CAA5'],
          type: "gradient",
          gradient: {
            shade: 'light',
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 0.3,
            stops: [0, 70, 100],
            colorStops: []
          }
        },
        tooltip: {
          theme:  display ? 'light' : 'dark' ,
          custom: function({series, seriesIndex, dataPointIndex, w}) {
            return '<div class="arrow_box p-2">' +
              '<span>$' + series[seriesIndex][dataPointIndex] + '</span>' +
              '</div>'
          }        
        }
      },
      series: [
        {
          name: 'series-1',
          data: chartInfo.seriesData,
        },
      ],
    };

    const monthly = () => {
      setIsToggleOpen(false)
      setChartSpec('Monthly')
    }

    const daily = () => {
      setIsToggleOpen(false)
      setChartSpec('Daily')
    }

    const weekly = () => {
      setIsToggleOpen(false)
      setChartSpec('Weekly')
    }

    const yearly = () => {
      setIsToggleOpen(false)
      setChartSpec('Yearly')
    }

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
    

  return (
    <section className={`w-full ${ display ? 'bg-bodyBgDark text-white' :'bg-bodyBg text-bodyBgDark'} duration-300 ${openTable ? 'h-screen overflow-hidden' : 'h-auto overflow-auto'}`}>
        <Header />
        <div className='w-full'>
          <div className='flex flex-col w-full p-4 gap-4 xl:flex-row'>
            <div className={`w-full lg:w-[65%] overflow-x-auto ${display ? 'bg-sidebarBgDark border-borderColorDark' : 'bg-white border-borderColor'} p-2 border-2 rounded-md`}>
              <div className='w-full flex justify-between'>
                <h2 className='text-[20px] font-extrabold'>Sales Trends</h2>
                <div className='flex gap-4 items-center'>
                  <p className={`text-[14px] font-medium ${ display ? 'text-white' : 'text-[#3A3F51]'}`}>Short by:</p>
                  <div className={`flex items-center cursor-pointer border-2 ${display ? 'border-borderColorDark text-white' : 'border-borderColor text-[#3A3F51]'} text-[12px] p-2 rounded-full cursor-pointer gap-2 relative`} onClick={() => setIsToggleOpen(!isToggleOpen)}>
                    <p>{chartSpec}</p>
                    {
                      isToggleOpen ?  <ArrowUp2 size='14' color='#78828A' /> : <ArrowDown2 size='14' color='#78828A' />
                    }
                    <ul className={`w-[120px] p-2 ${ display ? 'bg-sidebarBgDark': 'bg-sidebarBg' } shadow-md absolute top-10 right-2 z-30 flex flex-col gap-3 ${ isToggleOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0' }`}>
                      <li className='w-full hover:text-underline hover:underline-offset-1 hover:text-main duration-100' onClick={() => daily()}>Daily</li>
                      <li className='w-full hover:text-underline hover:underline-offset-1 hover:text-main duration-100' onClick={() => weekly()}>Weekly</li>
                      <li className='w-full hover:text-underline hover:underline-offset-1 hover:text-main duration-100' onClick={() => monthly()}>Monthly</li>
                      <li className='w-full hover:text-underline hover:underline-offset-1 hover:text-main duration-100' onClick={() => yearly()}>Yearly</li>
                    </ul>
                  </div>
                </div>
              </div>
              <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="bar"
                height="350"
                className='cursor-pointer w-full'
              />
            </div>
            <div className='grid grid-cols-2 gap-4 w-full xl:w-[35%]'>
              <Card card='order'/>
              <Card card='refund' />
              <Card card='sales' />
              <Card card='income' />
            </div>
          </div>
          <div className='flex flex-col w-full p-4 gap-4 xl:flex-row'>
            <Table table={shortTable} isPop={false}/>
            <div>

            </div>
          </div>
        </div>
        <div className={`w-full fixed h-screen top-0 left-0 bg-black/25 flex items-center justify-center z-40 ${openTable ? 'scale-100' : 'scale-0'} duration-200`}>
          <Table table={tableData} isPop={true}/>
        </div>
        <div className={`w-full fixed h-screen top-0 left-0 bg-black/25 flex items-center justify-center z-40 duration-200 ${showInv ? 'scale-100' : 'scale-0'}`}>
          <Invoice />
        </div>
    </section>
  )
}

export default Body