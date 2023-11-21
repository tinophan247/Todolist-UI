import React from "react";
import { NavLink } from "react-router-dom";

function HeaderEducation() {
  return (
    <div className="flex justify-between px-5 py-2  shadow-xl">
      <div className="flex items-center gap-20 ">
        <img
          className="w-32"
          src="https://marathon.edu.vn/images/logo-3.png"
          alt="logo"
        />
        <nav className="flex gap-10 text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 border-b border-green-600 font-semibold"
                : "font-semibold text-gray-600"
            }
          >
            Khóa học
          </NavLink>
          <NavLink
            to="/teacher"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 border-b border-green-600 font-semibold"
                : "font-semibold text-gray-600"
            }
          >
            Giáo viên
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 border-b border-green-600 font-semibold"
                : "font-semibold text-gray-600"
            }
          >
            Bản tin Marathon
          </NavLink>
        </nav>
      </div>
      <div className="flex gap-5">
        <button className="h-10 w-32 bg-white border border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-100">
            Góc học tập
        </button>
        <button className="h-10 w-32 bg-green-600 text-white rounded-lg font-semibold">
            Đăng nhập
        </button>
      </div>
    </div>
  );
}

export default HeaderEducation;
