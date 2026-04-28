import { useState } from "react";

const UserCard = ({ title, body }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        background: "white",
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "0.3s",
        border: "1px solid transparent",
        fontFamily: "Poppins, sans-serif", // 🔥 FONT
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.background = "#ffe4e6";
        e.currentTarget.style.border = "1px solid #ccc";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.background = "white";
        e.currentTarget.style.border = "1px solid transparent";
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontWeight: "600",
          marginBottom: "8px",
        }}
      >
        {title}
      </h2>

      {/* Body */}
      <p
        style={{
          color: "gray",
          fontSize: "14px",
        }}
      >
        {body}
      </p>

      {/* Button */}
      <button
        onClick={() => setClicked(true)}
        style={{
          marginTop: "12px",
          padding: "8px 12px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          background: clicked ? "#b83016" : "gray",
          color: "white",
          transition: "0.3s",
          fontWeight: "500",
        }}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
};

export default UserCard;