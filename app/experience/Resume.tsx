"use client";

import { useState } from "react";

export default function Resume() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Portfolio/PrabhatUprety_CV.pdf";
    link.download = "PrabhatUprety_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    setPopupVisible(true);
    setDropdownVisible(false);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseLeave={closeDropdown} // Close dropdown on mouse leave
    >
      {/* Main Button */}
      <button
        onClick={toggleDropdown}
        className="border border-gray-400 text-gray-700 px-6 py-2 rounded-lg font-medium shadow-sm hover:bg-gray-200 focus:bg-gray-300 transition-all flex items-center"
      >
        My Resume
        <svg
          className="ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {/* Dropdown */}
      {isDropdownVisible && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg py-1 z-50">
          <button
            onClick={handleDownload}
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            Download
          </button>
          <button
            onClick={handleView}
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12h2m-6 0h.01m-6 0h.01m12 6h2m-6 0h.01m-6 0h.01"
              ></path>
            </svg>
            View
          </button>
        </div>
      )}

      {/* Popup Window */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-5xl w-full">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            {/* Embedded PDF */}
            <iframe
              src="/Portfolio/PrabhatUprety_CV.pdf"
              className="w-full min-h-[500px] max-h-[90vh]"
              title="Resume Viewer"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
