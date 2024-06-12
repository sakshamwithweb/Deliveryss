import React from 'react'

const ErrorUser = () => {
  return (
    <div className='t-s text-xl text-red-500 text-center' style={{ 
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none'
      }}>
        Sorry! Something Went Wrong 
      </div>
  )
}

export default ErrorUser
