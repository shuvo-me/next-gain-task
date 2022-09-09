import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { hideModal, selectModalState } from "../store/modalSlice";

const animatedComponents = makeAnimated();

const AddProductModal = () => {
  const { show } = useSelector(selectModalState);
  const dispatch = useDispatch();
  const options = [
    { value: "best_value", label: "Best value" },
    { value: "best_performance", label: "Best Performance" },
    { value: "best_camera", label: "Best Camera" },
  ];
  //   console.log({ modalState.show });
  return (
    <div
      className={`w-full p-10 pb-14 h-screen bg-slate-400 bg-opacity-40 fixed top-0 left-0 bottom-0 ${
        show ? " block" : " hidden"
      }`}
    >
      <div className="modal-inner  max-w-[900px] bg-white mx-auto mt-[100px]">
        <div className="modal-header bg-[#0095A0] px-3 py-5 flex items-center justify-between text-white ">
          <h4 className="font-[600]">Add Product</h4>
          <div
            className="header-icon cursor-pointer"
            onClick={() => dispatch(hideModal())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="modal-body p-3 mt-[26px]">
          <form action="#">
            <div className="input-group">
              <label
                htmlFor="product_name"
                className=" text-[#74777B] text-[15px] text-[400] block"
              >
                Product name
              </label>
              <input
                type="text"
                className="text-slate-500 w-full border border-slate-200 py-2 px-2 rounded focus:border-[#0095A0] transition-all ease-in-out duration-300 outline-none mt-1"
                placeholder="Enter your product name"
                required
              />
            </div>
            <div className="input-group mt-5 flex items-center gap-5 w-full">
              <div className=" flex-1">
                <label
                  htmlFor="product_name"
                  className=" text-[#74777B] text-[15px] text-[400] block"
                >
                  Brand
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-200 py-2 px-2 rounded text-slate-500 focus:border-[#0095A0] transition-all ease-in-out duration-300 outline-none mt-1"
                  placeholder="Enter brand name"
                  required
                />
              </div>
              <div className=" flex-1">
                <label
                  htmlFor="product_name"
                  className=" text-[#74777B] text-[15px] text-[400] block"
                >
                  Ram/Rom
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-200 py-2 px-2 rounded focus:border-[#0095A0] transition-all ease-in-out duration-300 outline-none mt-1 text-slate-500"
                  placeholder="Enter your product ram/rom"
                  required
                />
              </div>
            </div>
            <div className="input-group mt-5 flex items-center gap-5 w-full">
              <div className=" flex-1">
                <label
                  htmlFor="product_name"
                  className=" text-[#74777B] text-[15px] text-[400] block mb-1"
                >
                  Tags
                </label>
                <Select
                  isMulti
                  name="options"
                  options={options}
                  classNamePrefix="select"
                  onChange={(e) => console.log({ e })}
                />
              </div>
            </div>
            <div className="input-group mt-5">
              <label
                htmlFor="product_name"
                className=" text-[#74777B] text-[15px] text-[400] block"
              >
                Price
              </label>
              <input
                type="text"
                className="text-slate-500 w-full border border-slate-200 py-2 px-2 rounded focus:border-[#0095A0] transition-all ease-in-out duration-300 outline-none mt-1"
                placeholder="Enter your product price"
                required
              />
            </div>
          </form>
        </div>
        <div className="modal-bottom p-4 flex items-center justify-end gap-3 pt-16">
          <button
            className=" bg-[#B7B8BC] px-5 rounded py-2 text-white text-sm flex items-center"
            onClick={() => dispatch(hideModal())}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-[10px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Cancel
          </button>
          <button
            type="submit"
            onClick={() => dispatch(hideModal())}
            className="bg-[#0095A0] px-5 rounded py-2 text-white text-sm flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
