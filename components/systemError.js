import React from 'react'

const SystemError = () => {
  return (
    <div className='t-s text-xl text-red-500 text-center' style={{ 
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none'
      }}>
        Sorry We are unable to complete your request. Try to refresh
      </div>
  )
}

export default SystemError
