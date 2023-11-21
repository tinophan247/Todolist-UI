import React from 'react'
import HeaderEdu from '../../session4/HeaderEdu'
import Submit from '../../session4/Submit'

function HomeLayout({children}) {
  return (
    <div>
        <HeaderEdu/>
        {children}
        <Submit/>
    </div>
  )
}

export default HomeLayout