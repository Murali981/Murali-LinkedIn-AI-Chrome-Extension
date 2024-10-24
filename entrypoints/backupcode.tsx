// import React, { useEffect, useState } from "react";
// import { createRoot } from "react-dom/client";
// import AIIcon from "../public/assets/AIIcon.svg";
// import "../assets/index.css";

// const ContentApp: React.FC = () => {
//   const [isInputFocused, setIsInputFocused] = useState(false);
//   const [iconPosition, setIconPosition] = useState({ top: 0, left: 0 });

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
//         left: rect.right - 8, // 8px from right edge
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

//   // const renderAIIcon = () => {
//   //   return (
//   //     <button
//   //       className="group relative w-8 h-8 rounded-[200px] bg-white hover:bg-gray-50 transition-all duration-300 ease-out flex items-center justify-center"
//   //       style={{
//   //         padding: "4px", // Reduced padding to allow for larger icon
//   //         boxShadow:
//   //           "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
//   //         transform: "translate(-100%, 0)", // Move left by its own width
//   //       }}
//   //       onClick={() => {
//   //         console.log("AI Icon clicked");
//   //       }}
//   //     >
//   //       <div className="w-6 h-6 flex items-center justify-center">
//   //         <img
//   //           src={AIIcon}
//   //           alt="AI Assistant"
//   //           className="w-5 h-5"
//   //           style={{
//   //             objectFit: "contain",
//   //           }}
//   //         />
//   //       </div>
//   //     </button>
//   //   );
//   // };

//   // if (!isInputFocused) return null;

//   // return (
//   //   <div
//   //     className="fixed z-50"
//   //     style={{
//   //       position: "fixed",
//   //       top: `${iconPosition.top}px`,
//   //       left: `${iconPosition.left}px`,
//   //     }}
//   //   >
//   //     {renderAIIcon()}
//   //   </div>
//   // );
//   const renderAIIcon = () => {
//     return (
//       <button
//         className="
//            relative w-8 h-8
//           rounded-[200px]
//           bg-white hover:bg-gray-50
//           transition-all duration-300 ease-out
//           flex items-center justify-center
//            p-1
//           shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-2px_rgba(0,0,0,0.1)]
//            " /* transform: translate(-100%, 0) */
//         onClick={() => {
//           console.log("AI Icon clicked");
//         }}
//       >
//         <div className="w-6 h-6 flex items-center justify-center">
//           <img
//             src={AIIcon}
//             alt="AI Assistant"
//             className="w-5 h-5 object-contain"
//           />
//         </div>
//       </button>
//     );
//   };

//   if (!isInputFocused) return null;

//   return (
//     <div
//       className={`
//         fixed z-50
//         ${iconPosition.top ? `top-[${iconPosition.top}px]` : ""}
//         ${iconPosition.left ? `left-[${iconPosition.left}px]` : ""}
//       `}
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

// src/entrypoints/content.tsx
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import AIIcon from "../public/assets/AIIcon.svg";
import "../assets/index.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // Outside Modal Container
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={handleCloseModal}
    >
      {/* Modal Container */}
      {/* <div
        className="
          w-[870px]                   
          h-[192px]                    
          absolute                     
         bg-[#F9FAFB]                 
          p-[26px]                   
          rounded-[15px]            
          shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]
          translate-y-[-50%]
          gap-[26px]
          flex
          flex-col
          "
      > */}
      {/* <div
        className="
      w-[420px]                   
      h-[90px]                   
      bg-[#F9FAFB]                 
      p-4                         
      rounded-lg                
      shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]
      flex
      flex-col
      gap-4  
                        
    "
      > */}
      <div className="max-w-[1519px] mx-auto h-full flex items-center justify-center">
        <div
          className="
        w-[420px]                   
        h-[90px]                   
        bg-[#F9FAFB]                 
        p-4                         
        rounded-lg                
        shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]
        flex
        flex-col
        gap-4   
      "
        >
          {/* Content */}
        </div>
      </div>
      {/* <div className="w-[818px] h-[61px] gap-1 rounded-xl   shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.06)] mx-auto ">
          <div className="w-[818px] h-[61px]  rounded-[8px] border border-solid border-[#C1C7D0]  bg-[#FFFFFF] flex items-center">
            <div className="w-[786px] h-[52px] px-4 py-4   font-inter font-[500] text-[24px] leading-[29.05px] text-[#A4ACB9]">
              Your prompt
            </div>
          </div>
        </div>
        <div className="w-[190.03px] h-[53px] rounded-[8px] px-[24px] py-[12px] gap-[10px] bg-[#3B82F6] ml-auto "></div> */}
      {/* </div> */}
      {/* <div
        className="
          w-[445px]                   
          h-[70px]                    
          absolute                     
         bg-[#F9FAFB]                 
          p-[26px]                   
          rounded-[15px]            
          shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]
          translate-y-[-50%]
          gap-[26px]
          flex
          flex-col
          "
      >
        <div className="w-[393px] h-[40px] gap-1 rounded-xl   shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.06)] mx-auto ">
          <div className="w-[393px] h-[40px]  rounded-[8px] border border-solid border-[#C1C7D0]  bg-[#FFFFFF] flex items-center">
            <div className="w-[61px] h-[31px] px-4 py-4   font-inter font-[500] text-[24px] leading-[29.05px] text-[#A4ACB9]">
              Your prompt
            </div>
          </div>
        </div>
        <div className="w-[120px] h-[40px] rounded-[8px] px-[24px] py-[12px] gap-[10px] bg-[#3B82F6] ml-auto "></div>
      </div> */}
    </div>
  );
};

const ContentApp: React.FC = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [iconPosition, setIconPosition] = useState({ top: 0, left: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const messageInputSelector = '[contenteditable="true"][role="textbox"]';

    const handleFocus = (event: Event) => {
      const inputElement = event.target as HTMLElement;
      const rect = inputElement.getBoundingClientRect();

      console.log("Input element rect:", rect);

      // Position the icon at the bottom-right of the input field
      setIconPosition({
        // Add small offset from bottom and right edges
        top: rect.bottom - 26, // 8px up from bottom
        left: rect.right - 24, // 8px from right edge
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
          className=" relative w-8 h-8 rounded-[200px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-2px_rgba(0,0,0,0.1)]  bg-white hover:bg-gray-50 transition-all duration-300 ease-out flex items-center justify-center"
          // style={{
          //   padding: "4px", // Reduced padding to allow for larger icon
          //   boxShadow:
          //     "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
          //   transform: "translate(-100%, 0)", // Move left by its own width
          // }}
          onClick={() => {
            console.log("AI Icon clicked");
            setIsModalOpen(true);
          }}
        >
          <img
            src={AIIcon}
            alt="AI Assistant"
            className="w-4 h-4"
            style={{
              objectFit: "contain",
            }}
          />
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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

// // src/entrypoints/content.tsx
// import React, { useEffect, useState } from "react";
// import { createRoot } from "react-dom/client";
// // import AIIcon from "../public/assets/AIIcon.svg";
// import "../assets/index.css";

// const ContentApp: React.FC = () => {
//   const [isInputFocused, setIsInputFocused] = useState(false);

//   useEffect(() => {
//     const messageInputSelector = '[contenteditable="true"][role="textbox"]';

//     const handleFocus = (event: Event) => {
//       console.log("Input focused!");
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
//   }, [isInputFocused]);

//   const renderAIIcon = () => {
//     return (
//       <button
//         className="w-8 h-8 absolute top-[593px] left-[905px] rounded-[200px] bg-[#FFFFFF] flex items-center justify-center shadow-md
//          hover:bg-gray-50 transition-all duration-300 ease-out p-[9.07px_8.53px_9.07px_8px] cursor-pointer"
//         onClick={() => {
//           console.log("AI Icon clicked");
//         }}
//       >
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 16 14"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M15.4667 8.73332C15.4667 8.88655 15.4063 9.03351 15.2989 9.14187C15.1915 9.25022 15.0458 9.3111 14.8938 9.3111H13.7482V10.4667C13.7482 10.6199 13.6879 10.7668 13.5804 10.8752C13.473 10.9836 13.3273 11.0444 13.1754 11.0444C13.0235 11.0444 12.8778 10.9836 12.7703 10.8752C12.6629 10.7668 12.6026 10.6199 12.6026 10.4667V9.3111H11.4569C11.305 9.3111 11.1593 9.25022 11.0519 9.14187C10.9445 9.03351 10.8841 8.88655 10.8841 8.73332C10.8841 8.58008 10.9445 8.43312 11.0519 8.32477C11.1593 8.21641 11.305 8.15554 11.4569 8.15554H12.6026V6.99998C12.6026 6.84675 12.6629 6.69979 12.7703 6.59143C12.8778 6.48308 13.0235 6.42221 13.1754 6.42221C13.3273 6.42221 13.473 6.48308 13.5804 6.59143C13.6879 6.69979 13.7482 6.84675 13.7482 6.99998V8.15554H14.8938C15.0458 8.15554 15.1915 8.21641 15.2989 8.32477C15.4063 8.43312 15.4667 8.58008 15.4667 8.73332ZM1.719 2.95554H2.86464V4.11109C2.86464 4.26433 2.92499 4.41129 3.03241 4.51965C3.13984 4.628 3.28554 4.68887 3.43746 4.68887C3.58938 4.68887 3.73508 4.628 3.8425 4.51965C3.94993 4.41129 4.01028 4.26433 4.01028 4.11109V2.95554H5.15592C5.30784 2.95554 5.45354 2.89467 5.56096 2.78631C5.66839 2.67796 5.72874 2.531 5.72874 2.37776C5.72874 2.22453 5.66839 2.07757 5.56096 1.96921C5.45354 1.86086 5.30784 1.79998 5.15592 1.79998H4.01028V0.644428C4.01028 0.491192 3.94993 0.344232 3.8425 0.235878C3.73508 0.127523 3.58938 0.0666504 3.43746 0.0666504C3.28554 0.0666504 3.13984 0.127523 3.03241 0.235878C2.92499 0.344232 2.86464 0.491192 2.86464 0.644428V1.79998H1.719C1.56708 1.79998 1.42138 1.86086 1.31396 1.96921C1.20653 2.07757 1.14618 2.22453 1.14618 2.37776C1.14618 2.531 1.20653 2.67796 1.31396 2.78631C1.42138 2.89467 1.56708 2.95554 1.719 2.95554ZM10.8841 11.6222H10.3113V11.0444C10.3113 10.8912 10.2509 10.7442 10.1435 10.6359C10.0361 10.5275 9.89039 10.4667 9.73847 10.4667C9.58655 10.4667 9.44085 10.5275 9.33343 10.6359C9.226 10.7442 9.16565 10.8912 9.16565 11.0444V11.6222H8.59283C8.44091 11.6222 8.29521 11.6831 8.18779 11.7914C8.08036 11.8998 8.02001 12.0467 8.02001 12.2C8.02001 12.3532 8.08036 12.5002 8.18779 12.6085C8.29521 12.7169 8.44091 12.7778 8.59283 12.7778H9.16565V13.3555C9.16565 13.5088 9.226 13.6557 9.33343 13.7641C9.44085 13.8724 9.58655 13.9333 9.73847 13.9333C9.89039 13.9333 10.0361 13.8724 10.1435 13.7641C10.2509 13.6557 10.3113 13.5088 10.3113 13.3555V12.7778H10.8841C11.036 12.7778 11.1817 12.7169 11.2892 12.6085C11.3966 12.5002 11.4569 12.3532 11.4569 12.2C11.4569 12.0467 11.3966 11.8998 11.2892 11.7914C11.1817 11.6831 11.036 11.6222 10.8841 11.6222ZM13.4124 3.53332L3.43746 13.5946C3.22263 13.8111 2.93135 13.9328 2.62764 13.9328C2.32392 13.9328 2.03264 13.8111 1.81781 13.5946L0.335642 12.101C0.229232 11.9937 0.144822 11.8663 0.0872316 11.7261C0.0296415 11.5859 0 11.4356 0 11.2838C0 11.1321 0.0296415 10.9818 0.0872316 10.8416C0.144822 10.7014 0.229232 10.574 0.335642 10.4667L10.3113 0.405373C10.4177 0.298041 10.544 0.2129 10.683 0.154812C10.822 0.0967231 10.971 0.0668251 11.1215 0.0668251C11.2719 0.0668251 11.4209 0.0967231 11.5599 0.154812C11.699 0.2129 11.8253 0.298041 11.9317 0.405373L13.4124 1.89893C13.5188 2.00623 13.6032 2.13363 13.6608 2.27385C13.7184 2.41407 13.748 2.56435 13.748 2.71612C13.748 2.86789 13.7184 3.01818 13.6608 3.1584C13.6032 3.29861 13.5188 3.42601 13.4124 3.53332ZM12.6026 2.71648L11.1211 1.22221L8.82984 3.53332L10.3113 5.0276L12.6026 2.71648Z"
//             fill="#2563EB"
//           />
//         </svg>
//       </button>
//     );
//   };

//   if (!isInputFocused) return null;

//   return (
//     <div className="relative w-screen h-screen pointer-events-none">
//       <div>{renderAIIcon()}</div>
//     </div>
//   );
// };

// export default defineContentScript({
//   matches: ["*://*.linkedin.com/*"],
//   main() {
//     console.log("Content script initialized");
//     try {
//       // Create container that covers viewport
//       const container = document.createElement("div");
//       container.id = "linkedin-ai-reply-root";
//       container.style.position = "fixed"; // Fixed to viewport
//       container.style.top = "0";
//       container.style.left = "0";
//       container.style.width = "100vw";
//       container.style.height = "100vh";
//       container.style.pointerEvents = "none"; // Allow clicking through
//       container.style.zIndex = "9999"; // Keep on top

//       document.body.appendChild(container);

//       const root = createRoot(container);
//       root.render(React.createElement(ContentApp));
//     } catch (error) {
//       console.error("Failed to initialize:", error);
//     }
//   },
// });
