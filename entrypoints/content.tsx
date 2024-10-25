// // src/entrypoints/content.tsx
// import React, { useEffect, useState } from "react";
// import { createRoot } from "react-dom/client";
// import AIIcon from "../public/assets/AIIcon.svg";
// import "../assets/index.css";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const GenerateModal: React.FC<{
//   prompt: string;
//   onCloseRegenerate: () => void;
// }> = ({ prompt, onCloseRegenerate }) => {
//   const handleCloseModal = (e: React.MouseEvent) => {
//     if (e.target === e.currentTarget) {
//       console.log("handleCloseModal called");
//       onCloseRegenerate();
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-black/50 flex items-center justify-center"
//       onClick={handleCloseModal}
//     >
//       <div className="w-[435px] h-[230px] bg-[#F9FAFB] p-4 rounded-[6px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex flex-col gap-[12px] relative right-[30px] mx-auto">
//         <div className=" h-[20px] ml-auto rounded-[6px]  p-6 bg-[#DFE1E7] gap-1 flex justify-center items-center">
//           <div className="h-[15px] font-inter font-[200] text-[15px] leading-[12px] text-[#666D80] mr-1">
//             {prompt}
//           </div>
//         </div>
//         <div className="w-[350px] bg-[#DBEAFE] rounded-[4px] p-4 flex flex-col">
//           <div className="font-inter font-[400] text-[14px] leading-[19px] text-[#666D80] flex-1">
//             Thank you for the opportunity! If you have any more
//           </div>
//           <div className=" w-[320px] font-inter font-[400] text-[14px] leading-[19px] text-[#666D80] flex-1">
//             questions or if there's anything else I can help you
//           </div>
//           <div className="font-inter font-[400] text-[14px] leading-[19px] text-[#666D80] flex-1">
//             with, feel free to ask.
//           </div>
//         </div>
//         <div className="w-[415px] h-[30px]  rounded-[4px] relative  border border-solid border-[#C1C7D0]  bg-[#FFFFFF] ">
//           <div className="w-[351px] h-[25px] absolute top-[1px] left-[6px]    font-inter font-[200] text-[15px] leading-[26px] text-[#A4ACB9]">
//             Your prompt
//           </div>
//         </div>
//         <div className="flex ml-auto gap-6 ">
//           <div className="h-[30px] rounded-[4px] border-[2px] border-solid px-[8px] py-[8px] gap-[8px] border-[#666D80] flex justify-center items-center">
//             <svg
//               width="10"
//               height="10"
//               viewBox="0 0 15 17"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M6.1 12.3666V1.43331C6.1 1.05553 6.228 0.739087 6.484 0.483976C6.74 0.228865 7.05644 0.100864 7.43333 0.0999756C7.81111 0.0999756 8.128 0.227976 8.384 0.483976C8.64 0.739976 8.76756 1.05642 8.76667 1.43331V12.3666L12.6333 8.49998C12.8778 8.25553 13.1889 8.13331 13.5667 8.13331C13.9444 8.13331 14.2556 8.25553 14.5 8.49998C14.7444 8.74442 14.8667 9.05553 14.8667 9.43331C14.8667 9.81109 14.7444 10.1222 14.5 10.3666L8.36667 16.5C8.1 16.7666 7.78889 16.9 7.43333 16.9C7.07778 16.9 6.76667 16.7666 6.5 16.5L0.366666 10.3666C0.122222 10.1222 0 9.81109 0 9.43331C0 9.05553 0.122222 8.74442 0.366666 8.49998C0.611111 8.25553 0.922222 8.13331 1.3 8.13331C1.67778 8.13331 1.98889 8.25553 2.23333 8.49998L6.1 12.3666Z"
//                 fill="#666D80"
//               />
//             </svg>
//             <div className=" h-[26px] font-inter font-[600] text-[15px] leading-[26px] text-[#666D80]">
//               Insert
//             </div>
//           </div>
//           <div className=" h-[30px] rounded-[4px] px-[16px]  gap-[7px] bg-[#3B82F6]  flex justify-center  items-center ">
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 25 25"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M8.5 3.24541V0L4.25 4.32724L8.5 8.65459V5.40903C12.006 5.40903 14.875 8.32995 14.875 11.9C14.875 12.9818 14.6094 14.0098 14.131 14.929L15.6719 16.4978C16.5217 15.1454 17 13.5766 17 11.9C17 7.14005 13.1749 3.24541 8.5 3.24541ZM8.5 18.391C4.9937 18.391 2.125 15.4698 2.125 11.9C2.125 10.8182 2.39062 9.79046 2.8687 8.87081L1.32812 7.30224C0.478072 8.60041 0 10.2232 0 11.9C0 16.6599 3.82511 20.5546 8.5 20.5546V23.8L12.75 19.4728L8.5 15.1454V18.391Z"
//                 fill="white"
//               />
//             </svg>
//             <div className=" h-[26px] font-inter font-[600] text-[15px] leading-[26px] text-[#FFFFFF]">
//               Regenerate
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;
//   const [prompt, setPrompt] = useState("");

//   const [showModal, setShowModal] = useState(false);

//   const handleGenerate = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = (e: React.MouseEvent) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     // Outside Modal Container
//     <div
//       className="fixed inset-0 bg-black/50 flex items-center justify-center"
//       onClick={handleCloseModal}
//     >
//       <div
//         className="
//           w-[435px]
//           h-[90px]
//           bg-[#F9FAFB]
//           p-4
//           rounded-lg
//           shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]
//           flex
//           flex-col
//           gap-4
//           relative
//           right-[30px]
//           mx-auto
//         "
//       >
//         <input
//           className="w-[415px] h-[30px] rounded-[4px] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.06)] border-[#C1C7D0] bg-[#FFFFFF]
//             mx-auto placeholder:font-inter placeholder:font-[400] placeholder:text-[15px]
//             placeholder:leading-[26px] placeholder:text-[#A4ACB9]
//              outline-0 focus:outline-0
//              "
//           type="text"
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Your prompt"
//         />
//         <div
//           className=" h-[30px] rounded-[4px] px-[24px] py-[12px] gap-[10px] bg-[#3B82F6] cursor-pointer ml-auto flex justify-center  items-center "
//           onClick={handleGenerate}
//         >
//           <svg
//             width="17"
//             height="17"
//             viewBox="0 0 25 25"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M24.456 11.6075L2.45599 0.607504C2.28356 0.521271 2.08988 0.486719 1.89827 0.508009C1.70665 0.529299 1.52528 0.605523 1.37599 0.727504C1.23341 0.846997 1.12699 1.00389 1.0687 1.18055C1.0104 1.35721 1.00254 1.54662 1.04599 1.7275L4.00599 12.4975L1.00599 23.2375C0.965214 23.3886 0.960455 23.5471 0.992092 23.7003C1.02373 23.8535 1.09088 23.9972 1.18815 24.1198C1.28541 24.2423 1.41008 24.3403 1.55212 24.4059C1.69416 24.4715 1.84962 24.5029 2.00599 24.4975C2.16253 24.4966 2.31667 24.4589 2.45599 24.3875L24.456 13.3875C24.6198 13.3036 24.7573 13.1761 24.8532 13.0191C24.9492 12.862 25 12.6816 25 12.4975C25 12.3135 24.9492 12.133 24.8532 11.9759C24.7573 11.8189 24.6198 11.6914 24.456 11.6075ZM3.55599 21.6075L5.76599 13.4975H15.006V11.4975H5.76599L3.55599 3.3875L21.766 12.4975L3.55599 21.6075Z"
//               fill="white"
//             />
//           </svg>
//           <button className="w-[50px] h-[26px] font-inter font-[600] text-[15px] leading-[26px] text-[#FFFFFF]">
//             Generate
//           </button>
//           {showModal && (
//             <GenerateModal
//               prompt={prompt}
//               onCloseRegenerate={() => setShowModal(false)}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const ContentApp: React.FC = () => {
//   const [isInputFocused, setIsInputFocused] = useState(false);
//   const [iconPosition, setIconPosition] = useState({ top: 0, left: 0 });
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const messageInputSelector = '[contenteditable="true"][role="textbox"]';

//     const handleFocus = (event: Event) => {
//       const inputElement = event.target as HTMLElement;
//       const rect = inputElement.getBoundingClientRect();

//       console.log("Input element rect:", rect);

//       // Position the icon at the bottom-right of the input field
//       setIconPosition({
//         // Add small offset from bottom and right edges
//         top: rect.bottom - 26, // 8px up from bottom
//         left: rect.right - 24, // 8px from right edge
//       });
//       setIsInputFocused(true);
//     };

//     const handleBlur = (event: Event) => {
//       const relatedTarget = (event as FocusEvent).relatedTarget as HTMLElement;
//       if (relatedTarget?.closest("#linkedin-ai-reply-root")) {
//         return;
//       }
//       setIsInputFocused(false);
//     };

//     const setupListeners = (element: Element) => {
//       element.addEventListener("focus", handleFocus as EventListener);
//       element.addEventListener("blur", handleBlur as EventListener);
//     };

//     // Watch for input field
//     const observer = new MutationObserver(() => {
//       const messageInput = document.querySelector(messageInputSelector);
//       if (messageInput) {
//         console.log("Message input found");
//         setupListeners(messageInput);
//       }
//     });

//     observer.observe(document.body, {
//       childList: true,
//       subtree: true,
//     });

//     // Initial check
//     const messageInput = document.querySelector(messageInputSelector);
//     if (messageInput) {
//       setupListeners(messageInput);
//     }

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   const renderAIIcon = () => {
//     return (
//       <>
//         <button
//           className=" relative w-8 h-8 rounded-[200px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-2px_rgba(0,0,0,0.1)]  bg-white hover:bg-gray-50 transition-all duration-300 ease-out flex items-center justify-center"
//           onClick={() => {
//             console.log("AI Icon clicked");
//             setIsModalOpen(true);
//           }}
//         >
//           <img
//             src={AIIcon}
//             alt="AI Assistant"
//             className="w-4 h-4"
//             style={{
//               objectFit: "contain",
//             }}
//           />
//         </button>
//         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//       </>
//     );
//   };

//   if (!isInputFocused) return null;

//   return (
//     <div
//       className="fixed z-50"
//       style={{
//         // position: "fixed",
//         top: `${iconPosition.top}px`,
//         left: `${iconPosition.left}px`,
//       }}
//     >
//       {renderAIIcon()}
//     </div>
//   );
// };

// export default defineContentScript({
//   matches: ["*://*.linkedin.com/*"],
//   main() {
//     console.log("Content script initialized");
//     try {
//       const container = document.createElement("div");
//       container.id = "linkedin-ai-reply-root";
//       document.body.appendChild(container);

//       const root = createRoot(container);
//       root.render(React.createElement(ContentApp));
//     } catch (error) {
//       console.error("Failed to initialize:", error);
//     }
//   },
// });

////////////////////////// VERSION - 2 ///////////////////////////////////////////////////////////////////

// src/entrypoints/content.tsx
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import AIIcon from "../public/assets/AIIcon.svg";
import "../assets/index.css";

interface ModalProps {
  onClose: (e: React.MouseEvent) => void;
}

const GenerateModal: React.FC<{
  prompt: string;
  onClose: (e: React.MouseEvent) => void;
}> = ({ prompt, onClose }) => {
  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      console.log("handleCloseModal called");
      onClose(e);
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
        <div className="w-[350px] bg-[#DBEAFE] rounded-[4px] p-4 flex flex-col">
          <div className="font-inter font-[400] text-[14px] leading-[19px] text-[#666D80] flex-1">
            Thank you for the opportunity! If you have any more
          </div>
          <div className=" w-[320px] font-inter font-[400] text-[14px] leading-[19px] text-[#666D80] flex-1">
            questions or if there's anything else I can help you
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
          <div className="h-[30px] rounded-[4px] border-[2px] border-solid px-[8px] py-[8px] gap-[8px] border-[#666D80] flex justify-center items-center">
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

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [prompt, setPrompt] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleGenerate = () => {
    setShowModal(true);
  };

  function handleCloseRegenerateModal(e: React.MouseEvent) {
    e.stopPropagation();
    setShowModal(false);
  }

  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  return (
    // Outside Modal Container
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={handleCloseModal}
    >
      <div
        className="
          w-[435px]
          h-[90px]
          bg-[#F9FAFB]
          p-4
          rounded-lg
          shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]
          flex
          flex-col
          gap-4
          relative
          right-[30px]
          mx-auto
        "
      >
        <input
          className="w-[415px] h-[30px] rounded-[4px] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.06)] border-[#C1C7D0] bg-[#FFFFFF]
            mx-auto placeholder:font-inter placeholder:font-[400] placeholder:text-[15px]
            placeholder:leading-[26px] placeholder:text-[#A4ACB9]  
             outline-0 focus:outline-0
             "
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Your prompt"
        />
        <div
          className=" h-[30px] rounded-[4px] px-[24px] py-[12px] gap-[10px] bg-[#3B82F6] cursor-pointer ml-auto flex justify-center  items-center "
          onClick={handleGenerate}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.456 11.6075L2.45599 0.607504C2.28356 0.521271 2.08988 0.486719 1.89827 0.508009C1.70665 0.529299 1.52528 0.605523 1.37599 0.727504C1.23341 0.846997 1.12699 1.00389 1.0687 1.18055C1.0104 1.35721 1.00254 1.54662 1.04599 1.7275L4.00599 12.4975L1.00599 23.2375C0.965214 23.3886 0.960455 23.5471 0.992092 23.7003C1.02373 23.8535 1.09088 23.9972 1.18815 24.1198C1.28541 24.2423 1.41008 24.3403 1.55212 24.4059C1.69416 24.4715 1.84962 24.5029 2.00599 24.4975C2.16253 24.4966 2.31667 24.4589 2.45599 24.3875L24.456 13.3875C24.6198 13.3036 24.7573 13.1761 24.8532 13.0191C24.9492 12.862 25 12.6816 25 12.4975C25 12.3135 24.9492 12.133 24.8532 11.9759C24.7573 11.8189 24.6198 11.6914 24.456 11.6075ZM3.55599 21.6075L5.76599 13.4975H15.006V11.4975H5.76599L3.55599 3.3875L21.766 12.4975L3.55599 21.6075Z"
              fill="white"
            />
          </svg>
          <button className="w-[50px] h-[26px] font-inter font-[600] text-[15px] leading-[26px] text-[#FFFFFF]">
            Generate
          </button>
          {showModal && (
            <GenerateModal
              prompt={prompt}
              onClose={handleCloseRegenerateModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ContentApp: React.FC = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [iconPosition, setIconPosition] = useState({ top: 0, left: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCloseModal(e: React.MouseEvent) {
    e.stopPropagation();
    setIsModalOpen(false);
  }

  useEffect(() => {
    const messageInputSelector = '[contenteditable="true"][role="textbox"]';

    const handleFocus = (event: Event) => {
      const inputElement = event.target as HTMLElement;
      const rect = inputElement.getBoundingClientRect();

      console.log("Input element rect:", rect);

      // Position the icon at the bottom-right of the input field
      setIconPosition({
        // Add small offset from bottom and right edges
        top: rect.bottom - 20, // 8px up from bottom
        left: rect.right - 21, // 8px from right edge
      });
      setIsInputFocused(true);
    };

    const handleBlur = (event: Event) => {
      const relatedTarget = (event as FocusEvent).relatedTarget as HTMLElement;
      if (relatedTarget?.closest("#linkedin-ai-reply-root")) {
        return;
      }
      setIsInputFocused(false);
    };

    const setupListeners = (element: Element) => {
      element.addEventListener("focus", handleFocus as EventListener);
      element.addEventListener("blur", handleBlur as EventListener);
    };

    // Watch for input field
    const observer = new MutationObserver(() => {
      const messageInput = document.querySelector(messageInputSelector);
      if (messageInput) {
        console.log("Message input found");
        setupListeners(messageInput);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Initial check
    const messageInput = document.querySelector(messageInputSelector);
    if (messageInput) {
      setupListeners(messageInput);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const renderAIIcon = () => {
    return (
      <>
        <button
          className=" relative w-6 h-6 rounded-[200px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-2px_rgba(0,0,0,0.1)]  bg-white hover:bg-gray-50 transition-all duration-300 ease-out flex items-center justify-center"
          onClick={() => {
            console.log("AI Icon clicked");
            setIsModalOpen(true);
          }}
        >
          <img
            src={AIIcon}
            alt="AI Assistant"
            className="w-3 h-3"
            style={{
              objectFit: "contain",
            }}
          />
        </button>
        {isModalOpen && <Modal onClose={handleCloseModal} />}
      </>
    );
  };

  if (!isInputFocused) return null;

  return (
    <div
      className="fixed z-50"
      style={{
        // position: "fixed",
        top: `${iconPosition.top}px`,
        left: `${iconPosition.left}px`,
      }}
    >
      {renderAIIcon()}
    </div>
  );
};

export default defineContentScript({
  matches: ["*://*.linkedin.com/*"],
  main() {
    console.log("Content script initialized");
    try {
      const container = document.createElement("div");
      container.id = "linkedin-ai-reply-root";
      document.body.appendChild(container);

      const root = createRoot(container);
      root.render(React.createElement(ContentApp));
    } catch (error) {
      console.error("Failed to initialize:", error);
    }
  },
});
