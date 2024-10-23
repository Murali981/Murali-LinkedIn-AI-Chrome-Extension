import React from "react";

const AIIcon: React.FC = () => {
  return (
    <button
      className="w-8 h-8 rounded-[200px] bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-colors duration-300 ease-out flex items-center justify-center"
      onClick={() => {
        /* Modal implementation will come later */
      }}
    >
      <img
        src={browser.runtime.getURL("/AIIcon.svg")}
        alt="AI Assistant"
        className="w-5 h-5"
      />
    </button>
  );
};

export default AIIcon;
