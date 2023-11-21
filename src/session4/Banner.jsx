import React from "react";

function Banner() {
  return (
    <div className="h-[400px] bg-gradient-to-r from-orange-50 to-white relative flex">
      <div className=" w-[40%] absolute top-[25%] right-[50%]">
        <p className="text-5xl font-semibold text-blue-900">Chương Trình</p>
        <p className="text-5xl font-semibold text-green-600">Theo Bộ Giáo Dục</p>
        <p className="text-xl text-gray-400">
          Marathon biên soạn bài giảng bám sát với chương trình của Bộ Giáo Dục,
          giúp học viên đạt thành tích học tập cao nhất.
        </p>
      </div>
      <img src="https://marathon.edu.vn/images/portrait-banner.png" alt="" className=" absolute right-[25%] w-[300px]" />
    </div>
  );
}

export default Banner;
