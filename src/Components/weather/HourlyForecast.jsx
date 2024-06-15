import React from 'react'

const HourlyForecast = ({data}) => {

  return (
    <div className='my-5 shadow-2xl rounded-lg bg-blue-100 border-gray-300  dark:bg-gray-800 dark:border-gray-600 '>
        <div className='p-5'>
            <h1 className='text-start font-bold text-xl'>Hourly Forcase</h1>
            <div className='mt-4 py-1 px-5 lg:px-15 flex items-center justify-between gap-5 overflow-x-auto'>
                {data.map((item, index) => (
                    <div key={index} className='border border-gray-400 dark:border-gray-600 p-5 rounded-3xl flex flex-col items-center gap-2 min-w-max'>
                        <p className='font-semibold'>{item.title}</p>
                        <img src={item.icon} alt='icon' className='w-12 h-12'/>
                        <p className='text-xs uppercase mt-0'>{item.details}</p>
                        <p className='font-bold text-xl'>{item.temp.toFixed()}°</p>
                    </div>
                ))}

            </div>

        </div>
      
    </div>
  )
}

export default HourlyForecast
