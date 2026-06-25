import { useEffect } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./AuthModal.css";

function AuthModal({ isOpen, mode, setMode, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-modal"
          onClick={onClose}
        >
          ×
        </button>

        {mode === "login" ? (
          <LoginForm
            onClose={onClose}
            onSwitch={() => setMode("signup")}
          />
        ) : (
          <SignupForm
            onSwitch={() => setMode("login")}
          />
        )}
      </div>
    </div>
  );
}

export default AuthModal;
