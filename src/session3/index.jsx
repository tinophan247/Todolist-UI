import React from 'react'
import HomeLayout from './Layout/HomeLayout'
import Banner from '../session4/Banner'
import Category from '../session4/Category'
import Course from '../session4/Course'

function HomePage() {

  const eduList = [
    {
      id : 1,
      img : 'https://marathon.edu.vn/_next/image?url=https%3A%2F%2Fcdn.marathon.edu.vn%2Fuploads%2Fpdh9siK1kKfNB51wUrKi9lD3mkdKIv09KvdEBmeD.png&w=1920&q=75',
      name : 'Vật lý 12'
    },
    {
      id : 2,
      img : 'https://marathon.edu.vn/_next/image?url=https%3A%2F%2Fcdn.marathon.edu.vn%2Fuploads%2FmrqWI6JGXQHVfYZseoWuumk6QI1rHAsX6RcEk2HV.png&w=1920&q=75',
      name : 'Toán học 12'
    },
    {
      id : 3,
      img : 'https://marathon.edu.vn/_next/image?url=https%3A%2F%2Fcdn.marathon.edu.vn%2Fuploads%2FTdQ7Xb5mbOsc25en4dEvPGtqOQn05eBSozrPEQvm.png&w=1920&q=75',
      name : 'Hóa học 12'
    },
    {
      id : 4,
      img : 'https://marathon.edu.vn/_next/image?url=https%3A%2F%2Fcdn.marathon.edu.vn%2Fuploads%2FwTmr9V5hLZFburnt6qfVOXSlC01kTWfFnvEa4WiE.png&w=1920&q=75',
      name : 'Sinh học 12'
    },
    {
      id : 5,
      img : 'https://marathon.edu.vn/_next/image?url=https%3A%2F%2Fcdn.marathon.edu.vn%2Fuploads%2FVWvqQtqi9q8Brmd8bSHv2FntCgr7CT5sFt1tIpUL.png&w=1920&q=75',
      name : 'Tiếng Anh 12'
    },
    {
      id : 6,
      img : 'https://marathon.edu.vn/_next/image?url=https%3A%2F%2Fcdn.marathon.edu.vn%2Fuploads%2FEoRwrOsXrguUDxUPGMN59EHiU4JmwJXjpKVeOs5n.png&w=1920&q=75',
      name : 'Ngữ Văn 12'
    },
    {
      id : 7,
      img : 'https://marathon.edu.vn/_next/image?url=https%3A%2F%2Fcdn.marathon.edu.vn%2Fuploads%2FIRweAnKYMgPkDmjtV1LiiV9mHoLw3QfN3DZXmGVh.png&w=1920&q=75',
      name : 'Đánh giá năng lực ĐHQG-HCM'
    },
    {
      id : 8,
      img : 'https://marathon.edu.vn/_next/image?url=https%3A%2F%2Fcdn.marathon.edu.vn%2Fuploads%2FWNZ8BYScZZKKtUEdd2NZMJXPnrH5KsHEkpR7tB31.png&w=1920&q=75',
      name : 'Đánh giá năng lực ĐHQG-HN'
    },
  ]

  return (
    <HomeLayout>
        <Banner/>
        <Category/>
        <div className='flex justify-center items-center bg-slate-50 '>
            <div className='w-[1200px] max-w-[1200px] grid grid-cols-5 '>
              {eduList.map((item,index) =>(
                <Course item={item} key={index}/>
              ))}
            </div>
        </div>
    </HomeLayout>
  )
}

export default HomePage