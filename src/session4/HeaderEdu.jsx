import React from "react";
import { NavLink } from "react-router-dom";

function HeaderEdu() {
  return (
    <div className="h-16 bg-white shadow-xl flex justify-between items-center px-5 sticky top-0 z-10">
      <div className="flex gap-16">
        <img
          className="w-32"
          src="https://marathon.edu.vn/images/logo-3.png"
          alt="not found"
        />
        <nav className="flex gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-green-600 border-b-2 border-green-600"
                : "font-semibold text-gray-500 hover:text-green-600"
            }
          >
            Khóa học
          </NavLink>
          <NavLink
            to="/teacher"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-green-600 border-b-2 border-green-600"
                : "font-semibold text-gray-500 hover:text-green-600"
            }
          >
            Giáo viên
          </NavLink>
          <NavLink
            to="/bank"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-green-600 border-b-2 border-green-600"
                : "font-semibold text-gray-500 hover:text-green-600"
            }
          >
            Ngân hàng đề thi
          </NavLink>
          <NavLink
            to="/ai"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-green-600 border-b-2 border-green-600"
                : "font-semibold text-gray-500 hover:text-green-600"
            }
          >
            Hỏi đáp AI
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-green-600 border-b-2 border-green-600"
                : "font-semibold text-gray-500 hover:text-green-600"
            }
          >
            Bản tin Marathon
          </NavLink>
          <NavLink
            to="/videos"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-green-600 border-b-2 border-green-600"
                : "font-semibold text-gray-500 hover:text-green-600"
            }
          >
            Videos
          </NavLink>
          <NavLink
            to="/ctv"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-green-600 border-b-2 border-green-600"
                : "font-semibold text-gray-500 hover:text-green-600"
            }
          >
            Cộng tác viên
          </NavLink>
        </nav>
      </div>
      <div className="flex gap-5">
        <button className="w-32 h-10 font-semibold text-green-600 border border-green-600 bg-white rounded-lg hover:bg-[rgba(33,155,103,0.1)]">Góc học tập</button>
        <button className="w-32 h-10 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700">Đăng nhập</button>
      </div>
    </div>
  );
}

export default HeaderEdu;
