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
      <div className="max-w-[1200px] w-full mx-auto h-full flex items-center">
        <div className="w-[900px] mx-auto flex items-center justify-center relative right-[100px]">
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
          ></div>
        </div>
      </div>
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

{
  /* <div className="max-w-[1519px] mx-auto h-full flex items-center justify-center">
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
        > */
}
{
  /* Content */
}
{
  /* <div className="w-[818px] h-[61px] gap-1 rounded-xl   shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.06)] mx-auto ">
          <div className="w-[818px] h-[61px]  rounded-[8px] border border-solid border-[#C1C7D0]  bg-[#FFFFFF] flex items-center">
            <div className="w-[786px] h-[52px] px-4 py-4   font-inter font-[500] text-[24px] leading-[29.05px] text-[#A4ACB9]">
              Your prompt
            </div>
          </div>
        </div>
        <div className="w-[190.03px] h-[53px] rounded-[8px] px-[24px] py-[12px] gap-[10px] bg-[#3B82F6] ml-auto "></div> */
}
{
  /* </div>
      </div> */
}
