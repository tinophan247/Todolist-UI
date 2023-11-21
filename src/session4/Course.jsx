import React from 'react'

function Course({item}) {
  return (
    <div className='w-[200px] bg-white mt-5'>
        <img src={item.img} alt="" />
        <div className='flex justify-between px-3 py-5 text-sm'>
            <div>
                <button className='p-1 bg-green-100 text-green-600m'>Bộ giáo dục</button>
                <p className=' mt-2'>2023 - 2024</p>
                <p className='text-lg font-medium mt-2'>{item.name}</p>
            </div>
            <div>
                <button className='w-10 bg-[#FDECEC] border border-orange-500'>Lớp <span className='font-bold'>12</span></button>
            </div>
        </div>
    </div>
  )
}

export default Course