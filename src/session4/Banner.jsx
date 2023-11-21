import React from "react";

function Banner() {
  return (
    <div className="h-96 bg-gradient-to-r from-[#FBF4F5] to-white relative">
      <div className=" absolute top-[10%] right-0 flex gap-20 items-center">
        <div className="w-1/3">
        <p className="text-5xl font-semibold text-[#07375C] ">Chương Trình</p>
        <p className="text-5xl font-semibold text-green-600 ">Theo Bộ Giáo Dục</p>
        <p className="text-xl text-gray-500">
          Marathon biên soạn bài giảng bám sát với chương trình của Bộ Giáo Dục,
          giúp học viên đạt thành tích học tập cao nhất
        </p>
        </div>
        <img className="w-60" src="https://marathon.edu.vn/images/portrait-banner.png" alt="not found" />
      </div>
    </div>
  );
}

export default Banner;
