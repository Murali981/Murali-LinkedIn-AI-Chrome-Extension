import React from "react";
import { createRoot } from "react-dom/client";
import AIIcon from "../public/assets/AIIcon.svg";
import InputModal from "../components/InputModal";
import "../assets/index.css";

// The main application component
const ContentApp: React.FC = () => {
  // State variables to track input focus and modal state
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [iconPosition, setIconPosition] = useState({ top: 0, left: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to close the modal and reset the modal state
  function handleCloseModal(e: React.MouseEvent) {
    e.stopPropagation();
    setIsModalOpen(false);
  }

  // UseEffect hook to set up event listeners for the message input field
  useEffect(() => {
    const messageInputSelector = '[contenteditable="true"][role="textbox"]';

    // Function to handle focus on the message input field
    const handleFocus = (event: Event) => {
      const inputElement = event.target as HTMLElement;
      const rect = inputElement.getBoundingClientRect();

      console.log("Input element rect:", rect);

      // Position the AI icon at the bottom-right of the input field
      setIconPosition({
        top: rect.bottom - 20,
        left: rect.right - 21,
      });
      setIsInputFocused(true);
    };

    // Function to handle blur (loss of focus) on the message input field
    const handleBlur = (event: Event) => {
      const relatedTarget = (event as FocusEvent).relatedTarget as HTMLElement;
      if (relatedTarget?.closest("#linkedin-ai-reply-root")) {
        return;
      }
      setIsInputFocused(false);
    };

    // Function to set up the focus and blur event listeners on the message input field
    const setupListeners = (element: Element) => {
      element.addEventListener("focus", handleFocus as EventListener);
      element.addEventListener("blur", handleBlur as EventListener);
    };

    // Observe the DOM for changes and set up event listeners on the message input field
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

    // Initial check for the message input field and set up event listeners
    const messageInput = document.querySelector(messageInputSelector);
    if (messageInput) {
      setupListeners(messageInput);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  // Function to render the AI icon button and the InputModal component
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
        {isModalOpen && <InputModal onClose={handleCloseModal} />}
      </>
    );
  };

  // If the input field is not focused, don't render anything
  if (!isInputFocused) return null;

  // Render the AI icon button at the bottom-right of the input field
  return (
    <div
      className="fixed z-50"
      style={{
        top: `${iconPosition.top}px`,
        left: `${iconPosition.left}px`,
      }}
    >
      {renderAIIcon()}
    </div>
  );
};

// Define the content script that will be injected into the LinkedIn page
export default defineContentScript({
  matches: ["*://*.linkedin.com/*"],
  main() {
    console.log("Content script initialized");
    try {
      // Create a container element for the application
      const container = document.createElement("div");
      container.id = "linkedin-ai-reply-root";
      document.body.appendChild(container);

      // Render the main application component
      const root = createRoot(container);
      root.render(React.createElement(ContentApp));
    } catch (error) {
      console.error("Failed to initialize:", error);
    }
  },
});
