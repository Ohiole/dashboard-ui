import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import ReactApexChart from 'react-apexcharts'
import { ShareContext } from '../context/ShareContext'
import { ArrowDown2 } from 'iconsax-react'

function Body() {
    const { display } = useContext(ShareContext)

    const [chartTextColor, setChartTextColor] = useState('#525252')

    
    useEffect(() => {
      if (display) {
        setChartTextColor('#FFF')
      } else {
        setChartTextColor('#525252')
      }
    }, [display])

    const chartData = {
      options: {
        chart: {
          id: 'custom-bar-chart',
          type: 'bar',
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
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
            borderRadius: 15,
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
          data: [8000, 18000, 3500, 28000, 9000, 45000, 9000, 20000, 32000, 4000, 30000, 26000],
        },
      ],
    };

  return (
    <section className={`w-full ${ display ? 'bg-bodyBgDark' :'bg-bodyBg'} duration-300`}>
        <Header />
        <div>
          <div>
            <div>
              <div>
                <h2>Sales Trends</h2>
                <div>
                  <p>Short by:</p>
                  <div>
                    <p>Weekly</p>
                    <ArrowDown2 size='18' color='#78828A' />
                  </div>
                </div>
              </div>
              <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="bar"
                width="600"
                className='cursor-pointer'
              />
            </div>
            <div>
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