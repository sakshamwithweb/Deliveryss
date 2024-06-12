import React from 'react'

const UserNotFound = () => {
  return (
    <div className='t-s text-xl text-red-500 text-center' style={{ 
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none'
      }}>
       User didn't found with such email and password
      </div>
  )
}

export default UserNotFound
