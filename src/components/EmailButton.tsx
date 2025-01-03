import React from "react";

interface EmailButtonProps {
  email: string;
  subject: string;
  body: string;
  buttonText: string;
  style?: React.CSSProperties;
}

const EmailButton: React.FC<EmailButtonProps> = ({
  email,
  subject,
  body,
  buttonText,
  style,
}) => {
  const handleClick = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        color: "white",
        backgroundColor: "#007BFF",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        ...style,
      }}
    >
      {buttonText}
    </button>
  );
};

export default EmailButton;
