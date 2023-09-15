import React from "react";
import { Formik } from "formik";

const ReviewForm = () => {

    return (
        <div className="px-4">
            <div>
                <form className="flex flex-col gap-5">
                <div>
                <label>Name</label>
                <input className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm "></input>
                </div>
                <div>
                <label>Rating</label>
                <input className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm "></input>
                </div>
                <div>
                <label>Message</label>
                <input className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm "></input>
                </div>
                <button
                        className="hover:text-black bg-gray-200 p-3 rounded"
                        type="submit"
                      >
                        Submit review
                      </button>
               </form>
            </div>
        </div>
    );
};

export default ReviewForm;