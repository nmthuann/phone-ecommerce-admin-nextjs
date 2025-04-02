'use client'
import React from 'react'
import { BeatLoader } from 'react-spinners'

const LoadingOverlay = ({ loading = false, text = 'Loading...' }) => {
  if (!loading) return null

  return (
    <div className='fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center'>
      <div className='text-center'>
        <BeatLoader color='#3498db' size={20} />
        {text && <p className=' mt-4'>{text}</p>}
      </div>
    </div>
  )
}

export default LoadingOverlay
