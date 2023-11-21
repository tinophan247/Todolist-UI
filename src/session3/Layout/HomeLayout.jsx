import React from 'react'
import HeaderEducation from '../../session4/Headeer'

function HomeLayout({children}) {
  return (
    <div>
        <HeaderEducation/>
        {children}
    </div>
  )
}

export default HomeLayout