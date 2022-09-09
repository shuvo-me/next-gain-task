import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../store/modalSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="header bg-[#0095A0] py-2">
      <div className="header-wrapper container mx-auto flex items-center justify-between">
        <div className="header-left">
          <div className="header-logo">
            <h2 className=" font-bold text-[31.4118px] text-white">LOGO</h2>
          </div>
        </div>
        <div className="header-right flex items-center gap-3">
          <div className="header-search flex items-center border border-slate-50">
            <input
              type="text"
              placeholder="Search by Title or Brand"
              className=" border-none outline-none bg-transparent placeholder:text-white placeholder:text-[12px] px-2 py-1 text-white"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <div className="header-btn">
            <button
              className=" bg-white px-2 py-[7px] text-[#0095A0] text-[14px]"
              onClick={() => dispatch(openModal())}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
