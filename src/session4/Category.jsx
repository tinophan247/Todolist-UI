import React from 'react'

function Category() {
  return (
    <div className='h-16 bg-blue-50 flex justify-center items-center'>
        <nav className='w-[1200px] max-w-[1200px] font-semibold flex justify-center'>
            <div className='w-20 h-10 flex justify-center items-center'>Tất cả</div>
            <div className='w-20 h-10 border border-green-600 text-green-600 flex justify-center items-center rounded-lg'>Lớp 12</div>
            <div className='w-20 h-10 flex justify-center items-center'>Lớp 11</div>
            <div className='w-20 h-10 flex justify-center items-center'>Lớp 10</div>
            <div className='w-20 h-10 flex justify-center items-center'>Lớp 9</div>
            <div className='w-20 h-10 flex justify-center items-center'>Lớp 8</div>
            <div className='w-20 h-10 flex justify-center items-center'>Lớp 7</div>
            <div className='w-20 h-10 flex justify-center items-center'>Lớp 6</div>
            <div className='w-20 h-10 flex justify-center items-center'>Lớp 5</div>
            <div className='w-20 h-10 flex justify-center items-center'>Lớp 4</div>
            <div className='w-20 h-10 flex justify-center items-center'>Lớp 3</div>
            <div className='w-20 h-10 flex justify-center items-center'>Lớp 2</div>
            <div className='w-20 h-10 flex justify-center items-center'>Lớp 1</div>
        </nav>
    </div>
  )
}

export default Category