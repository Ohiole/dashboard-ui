import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import ReactApexChart from 'react-apexcharts'
import { ShareContext } from '../context/ShareContext'
import { ArrowDown2, ArrowUp2 } from 'iconsax-react'

function Body() {
    const { display } = useContext(ShareContext)

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
          setChartInfo({...chartInfo, 
            'categories': ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
            'seriesData': [600, 2200, 150, 1900, 700, 3600, 900, 3000, 4500, 500]
          })
          break;
        case 'Daily':
          setChartInfo({...chartInfo, 
            'categories': ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
            'seriesData': [20000, 32000, 4000, 30000, 26000, 45000, 9000, ]
          })
          break;
        case 'Yearly':
          setChartInfo({...chartInfo, 
            'categories': [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            'seriesData': [400000, 3000000, 2600000, 4500000, 900000, 2000000, 3200000, 400000, 3000000, 2600000, 4500000, 900000, 2000000, 3200000, 400000]
          })
          break;
        default:
          setChartInfo({...chartInfo, 
            'categories': ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
            'seriesData': [8000, 18000, 3500, 28000, 9000, 45000, 9000, 20000, 32000, 4000, 30000, 26000]
          })
          break;
      }
    }, [chartSpec, chartInfo])

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
    

  return (
    <section className={`w-full ${ display ? 'bg-bodyBgDark text-white' :'bg-bodyBg text-bodyBgDark'} duration-300`}>
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
          <div>
            <div>

            </div>
            <div>

            </div>
          </div>
        </div>
    </section>
  )
}

export default Body