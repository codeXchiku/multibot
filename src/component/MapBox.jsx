import React from 'react'

const MapBox = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='rounded-lg shadow-md p-6 mx-4 w-full sm:w-3/4 lg:w-2/3'>
        <h2 className='text-2xl font-bold mb-2 text-gray-700'>Odisha</h2>
        <div className='overflow-hidden rounded-lg shadow-lg'>
          <iframe className='w-full h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834529.345760767!2d84.43725675000002!3d20.189978550000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a226aece9af3bfd%3A0x133625caa9cea81f!2sOdisha!5e0!3m2!1sen!2sin!4v1714843140395!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default MapBox
