import React, { useRef } from "react";
import InsertModal from "./InsertModal";
import "../assets/index.css";

// Interface defining the props for the InputModal component
interface ModalProps {
  onClose: (e: React.MouseEvent) => void;
}

// The InputModal component that represents the main modal
const InputModal: React.FC<ModalProps> = ({ onClose }) => {
  // State variables to manage the prompt and modal visibility
  const [prompt, setPrompt] = useState("");
  const [showModal, setShowModal] = useState(false);
  const messageInputRef = useRef<HTMLInputElement>(null);

  // Function to trigger the display of the modal
  const handleGenerate = () => {
    setShowModal(true);
  };

  // Function to close the GenerateModal when the user clicks outside of it
  const handleCloseRegenerateModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowModal(false);
  };

  // Function to close the entire InputModal when the user clicks outside of it
  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  // Function to handle the insertion of static text into the LinkedIn message input field
  const handleInsert = (text: string, e: React.MouseEvent) => {
    // Clear the placeholder text
    const placeholder = document.querySelector(".msg-form__placeholder");
    if (placeholder) {
      placeholder.setAttribute("data-placeholder", "");
    }

    // Insert the static text into the LinkedIn message input field
    const messageInput = document.querySelector<HTMLDivElement>(
      ".msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate"
    );
    if (messageInput) {
      messageInput.textContent = text;
      messageInput.focus();
    }

    // Close the GenerateModal
    handleCloseRegenerateModal(e);

    // Close the entire InputModal
    onClose(e);
  };

  return (
    // Render the InputModal container
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
        {/* Input field for the prompt */}
        <input
          className="w-[415px] h-[30px] rounded-[5px]  bg-[#FFFFFF]
            mx-auto placeholder:font-inter placeholder:font-[500] placeholder:text-[13px]
            placeholder:leading-[26px] placeholder:text-[#A4ACB9]  
             "
          style={{
            border: "1px solid #C1C7D0",
            boxShadow: "none",
            outline: "none",
          }}
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Your prompt"
          ref={messageInputRef}
        />

        {/* Generate button */}
        <div
          className="h-[30px] rounded-[4px] px-[14px] py-[9px] bg-[#3B82F6] cursor-pointer ml-auto flex justify-center items-center"
          onClick={handleGenerate}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.456 11.6075L2.45599 0.607504C2.28356 0.521271 2.08988 0.486719 1.89827 0.508009C1.70665 0.529299 1.52528 0.605523 1.37599 0.727504C1.23341 0.846997 1.12699 1.00389 1.0687 1.18055C1.0104 1.35721 1.00254 1.54662 1.04599 1.7275L4.00599 12.4975L1.00599 23.2375C0.965214 23.3886 0.960455 23.5471 0.992092 23.7003C1.02373 23.8535 1.09088 23.9972 1.18815 24.1198C1.28541 24.2423 1.41008 24.3403 1.55212 24.4059C1.69416 24.4715 1.84962 24.5029 2.00599 24.4975C2.16253 24.4966 2.31667 24.4589 2.45599 24.3875L24.456 13.3875C24.6198 13.3036 24.7573 13.1761 24.8532 13.0191C24.9492 12.862 25 12.6816 25 12.4975C25 12.3135 24.9492 12.133 24.8532 11.9759C24.7573 11.8189 24.6198 11.6914 24.456 11.6075ZM3.55599 21.6075L5.76599 13.4975H15.006V11.4975H5.76599L3.55599 3.3875L21.766 12.4975L3.55599 21.6075Z"
              fill="white"
            />
          </svg>
          <span className="ml-2 font-inter font-[600] text-[15px] leading-[26px] text-[#FFFFFF]">
            Generate
          </span>
          {/* Render the InsertModal component if the showModal state is true */}
          {showModal && (
            <InsertModal
              prompt={prompt}
              onClose={handleCloseRegenerateModal}
              onInsert={handleInsert}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default InputModal;
