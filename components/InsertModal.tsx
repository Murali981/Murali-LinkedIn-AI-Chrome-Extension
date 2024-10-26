import React, { useRef } from "react";

const InsertModal: React.FC<{
  prompt: string;
  onClose: (e: React.MouseEvent) => void;
  onInsert: (text: string, e: React.MouseEvent) => void;
}> = ({ prompt, onClose, onInsert }) => {
  const staticTextContainerRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      console.log("handleCloseModal called");
      onClose(e);
    }
  };

  const handleInsert = (e: React.MouseEvent) => {
    console.log("handleInsert called");
    if (staticTextContainerRef.current) {
      const staticText = staticTextContainerRef.current.textContent || "";
      onInsert(staticText, e);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={handleCloseModal}
    >
      <div className="w-[435px] h-[230px] bg-[#F9FAFB] p-4 rounded-[6px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex flex-col gap-[12px] relative right-[30px] mx-auto">
        <div className=" h-[20px] ml-auto rounded-[6px]  p-6 bg-[#DFE1E7] gap-1 flex justify-center items-center">
          <div className="h-[15px] font-inter font-[200] text-[15px] leading-[12px] text-[#666D80] mr-1">
            {prompt}
          </div>
        </div>
        <div
          className="w-[350px] bg-[#DBEAFE] rounded-[4px] p-4 flex flex-col"
          ref={staticTextContainerRef}
        >
          <div className="font-inter font-[400] text-[14px] leading-[19px] text-[#666D80] flex-1">
            Thank you for the opportunity! If you have any more&nbsp;
          </div>
          <div className=" w-[320px] font-inter font-[400] text-[14px] leading-[19px] text-[#666D80] flex-1">
            questions or if there's anything else I can help you&nbsp;
          </div>
          <div className="font-inter font-[400] text-[14px] leading-[19px] text-[#666D80] flex-1">
            with, feel free to ask.
          </div>
        </div>
        <div className="w-[415px] h-[30px]  rounded-[4px] relative  border border-solid border-[#C1C7D0]  bg-[#FFFFFF] ">
          <div className="w-[351px] h-[25px] absolute top-[1px] left-[6px]    font-inter font-[200] text-[15px] leading-[26px] text-[#A4ACB9]">
            Your prompt
          </div>
        </div>
        <div className="flex ml-auto gap-6 ">
          <div
            className="h-[30px] rounded-[4px] border-[2px] border-solid px-[8px] py-[8px] gap-[8px] border-[#666D80] flex justify-center items-center"
            onClick={handleInsert}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.1 12.3666V1.43331C6.1 1.05553 6.228 0.739087 6.484 0.483976C6.74 0.228865 7.05644 0.100864 7.43333 0.0999756C7.81111 0.0999756 8.128 0.227976 8.384 0.483976C8.64 0.739976 8.76756 1.05642 8.76667 1.43331V12.3666L12.6333 8.49998C12.8778 8.25553 13.1889 8.13331 13.5667 8.13331C13.9444 8.13331 14.2556 8.25553 14.5 8.49998C14.7444 8.74442 14.8667 9.05553 14.8667 9.43331C14.8667 9.81109 14.7444 10.1222 14.5 10.3666L8.36667 16.5C8.1 16.7666 7.78889 16.9 7.43333 16.9C7.07778 16.9 6.76667 16.7666 6.5 16.5L0.366666 10.3666C0.122222 10.1222 0 9.81109 0 9.43331C0 9.05553 0.122222 8.74442 0.366666 8.49998C0.611111 8.25553 0.922222 8.13331 1.3 8.13331C1.67778 8.13331 1.98889 8.25553 2.23333 8.49998L6.1 12.3666Z"
                fill="#666D80"
              />
            </svg>
            <div className=" h-[26px] font-inter font-[600] text-[15px] leading-[26px] text-[#666D80]">
              Insert
            </div>
          </div>
          <div className=" h-[30px] rounded-[4px] px-[16px]  gap-[7px] bg-[#3B82F6]  flex justify-center  items-center ">
            <svg
              width="16"
              height="16"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 3.24541V0L4.25 4.32724L8.5 8.65459V5.40903C12.006 5.40903 14.875 8.32995 14.875 11.9C14.875 12.9818 14.6094 14.0098 14.131 14.929L15.6719 16.4978C16.5217 15.1454 17 13.5766 17 11.9C17 7.14005 13.1749 3.24541 8.5 3.24541ZM8.5 18.391C4.9937 18.391 2.125 15.4698 2.125 11.9C2.125 10.8182 2.39062 9.79046 2.8687 8.87081L1.32812 7.30224C0.478072 8.60041 0 10.2232 0 11.9C0 16.6599 3.82511 20.5546 8.5 20.5546V23.8L12.75 19.4728L8.5 15.1454V18.391Z"
                fill="white"
              />
            </svg>
            <div className=" h-[26px] font-inter font-[600] text-[15px] leading-[26px] text-[#FFFFFF]">
              Regenerate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsertModal;
