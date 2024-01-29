import React, { useContext } from 'react'
import Header from '../components/Header'
import ReactApexChart from 'react-apexcharts'
import { ShareContext } from '../context/ShareContext'
import { ArrowDown2 } from 'iconsax-react'

function Body() {

    const { display } = useContext(ShareContext)

    const chartData = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
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
                width="500"
              />
            </div>
            <div>

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