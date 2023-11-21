import React from 'react'

function Course({item}) {
  return (
    <div className='w-[228px] h-[300px] bg-white rounded-xl'>
    <img src={item.img} alt="" />
    <div className='flex justify-between p-3'>
      <div>
        <button className='text-green-600 bg-green-100 p-1'>Bộ giáo dục</button>
        <p className='mt-2'>2023-2024</p>
        <p className='mt-2'>{item.name}</p>
      </div>
      <div>
        <button className='w-10 bg-[#FDECEC] border border-[#F9BA98]'>Lớp <span className='font-bold'>12</span></button>
      </div>
    </div>
    </div>
  )
}

export default Course