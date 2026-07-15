import { useEffect, useState } from "react";
import "./toast.css";

export default function Toast({ message, type, onClose }) {
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // Only auto-dismiss for final states (success/error)
    if (type === "submitting" || !message) return;

    const hideTimer = setTimeout(() => {
      setIsHiding(true);
    }, 4650); // Start slide-out animation

    const closeTimer = setTimeout(() => {
      onClose();
    }, 5000); // Trigger onClose event

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(closeTimer);
    };
  }, [type, message, onClose]);

  const handleClose = () => {
    setIsHiding(true);
    setTimeout(() => {
      onClose();
    }, 350); // Wait for slideOut animation to complete
  };

  if (!message) return null;

  let iconClass = "uil uil-info-circle";
  if (type === "success") iconClass = "uil uil-check-circle";
  if (type === "error") iconClass = "uil uil-exclamation-octagon";
  if (type === "submitting") iconClass = "uil uil-spinner-alt";

  return (
    <div className="toast-container">
      <div className={`toast ${type} ${isHiding ? "hide" : ""}`}>
        <div className="toast__icon">
          <i className={iconClass}></i>
        </div>
        <div className="toast__content">
          <span className="toast__message">{message}</span>
        </div>
        {type !== "submitting" && (
          <button className="toast__close" onClick={handleClose} aria-label="Close notification">
            <i className="uil uil-times"></i>
          </button>
        )}
        <div className="toast__progress">
          <div className="toast__progress-bar"></div>
        </div>
      </div>
    </div>
  );
}
