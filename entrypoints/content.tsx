// src/entrypoints/content.tsx
// import React, { useEffect, useState } from "react";
// import { createRoot } from "react-dom/client";
// import AIIcon from "../public/assets/AIIcon.svg";
// import "../assets/index.css";

// // Define types for better type safety
// interface Position {
//   top: number;
//   left: number;
// }

// const ContentApp: React.FC = () => {
//   const [isInputFocused, setIsInputFocused] = useState(false);
//   const [iconPosition, setIconPosition] = useState<Position>({
//     top: 0,
//     left: 0,
//   });

//   useEffect(() => {
//     // LinkedIn message input selector
//     const messageInputSelector = '[contenteditable="true"][role="textbox"]';

//     const handleFocus = (event: Event) => {
//       const inputElement = event.target as HTMLElement;
//       const rect = inputElement.getBoundingClientRect();

//       // Debug positioning
//       console.log("Input element rect:", {
//         top: rect.top,
//         right: rect.right,
//         bottom: rect.bottom,
//         left: rect.left,
//       });

//       // Calculate position based on Figma specs
//       const newPosition = {
//         // Adjust these values based on the actual LinkedIn UI
//         top: rect.top - 32, // Position above the input field
//         left: rect.right - 40, // 40px from the right edge
//       };

//       console.log("Calculated position:", newPosition);
//       setIconPosition(newPosition);
//       setIsInputFocused(true);
//     };

//     const handleBlur = (event: Event) => {
//       // Don't blur if clicking inside the AI icon
//       const relatedTarget = (event as FocusEvent).relatedTarget as HTMLElement;
//       if (relatedTarget?.closest("#linkedin-ai-reply-root")) {
//         return;
//       }
//       setIsInputFocused(false);
//     };

//     const setupListeners = (element: Element) => {
//       console.log("Setting up listeners for element:", element);
//       element.addEventListener("focus", handleFocus as EventListener);
//       element.addEventListener("blur", handleBlur as EventListener);
//     };

//     const removeListeners = (element: Element) => {
//       element.removeEventListener("focus", handleFocus as EventListener);
//       element.removeEventListener("blur", handleBlur as EventListener);
//     };

//     // Watch for input field
//     const observer = new MutationObserver(() => {
//       const messageInput = document.querySelector(messageInputSelector);
//       if (messageInput) {
//         console.log("Message input found:", messageInput);
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

//     // Cleanup
//     return () => {
//       observer.disconnect();
//       const messageInput = document.querySelector(messageInputSelector);
//       if (messageInput) {
//         removeListeners(messageInput);
//       }
//     };
//   }, []);

//   // Render AIIcon with circle container
//   const renderAIIcon = () => {
//     return (
//       <button
//         className="group relative w-8 h-8 rounded-[200px] bg-white hover:bg-gray-50 transition-all duration-300 ease-out flex items-center justify-center"
//         style={{
//           padding: "9.07px 8.53px 9.07px 8px",
//           boxShadow:
//             "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
//         }}
//         onClick={() => {
//           console.log("AI Icon clicked");
//         }}
//       >
//         <img
//           src={AIIcon}
//           alt="AI Assistant"
//           className="w-[15.47px] h-[13.87px]"
//         />
//       </button>
//     );
//   };

//   if (!isInputFocused) return null;

//   return (
//     <div
//       className="fixed z-50"
//       style={{
//         position: "fixed",
//         top: `${iconPosition.top}px`,
//         left: `${iconPosition.left}px`,
//         transform: "translate(-50%, -50%)", // Center the icon
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
//       console.log("React app rendered");
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

const ContentApp: React.FC = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [iconPosition, setIconPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const messageInputSelector = '[contenteditable="true"][role="textbox"]';

    const handleFocus = (event: Event) => {
      const inputElement = event.target as HTMLElement;
      const rect = inputElement.getBoundingClientRect();

      console.log("Input element rect:", rect);

      // Position the icon at the bottom-right of the input field
      setIconPosition({
        // Add small offset from bottom and right edges
        top: rect.bottom - 8, // 8px up from bottom
        left: rect.right - 8, // 8px from right edge
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
      <button
        className="group relative w-8 h-8 rounded-[200px] bg-white hover:bg-gray-50 transition-all duration-300 ease-out flex items-center justify-center"
        style={{
          padding: "4px", // Reduced padding to allow for larger icon
          boxShadow:
            "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
          transform: "translate(-100%, 0)", // Move left by its own width
        }}
        onClick={() => {
          console.log("AI Icon clicked");
        }}
      >
        <div className="w-6 h-6 flex items-center justify-center">
          {" "}
          {/* Container for icon */}
          <img
            src={AIIcon}
            alt="AI Assistant"
            className="w-5 h-5" // Increased icon size
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </button>
    );
  };

  if (!isInputFocused) return null;

  return (
    <div
      className="fixed z-50"
      style={{
        position: "fixed",
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
