import React from "react";

export default function WebAppOverlay({ open, onClose, src }) {
  if (!open) return null;

  return (
    <div
      className="overlay-container"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
      }}
    >
      <div
        className="overlay-inner"
        style={{
          position: "relative",
          width: "94%",
          height: "92%",
          background: "#f9f9f9",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
        }}
      >
        {/* ✅ 닫기 버튼 */}
        <button
          className="overlay-close"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "16px",
            fontSize: "28px",
            background: "transparent",
            border: "none",
            color: "#000",               // ✅ 검은색으로 변경
            cursor: "pointer",
            transition: "transform 0.18s ease, opacity 0.18s ease",
            opacity: 0.7,
            zIndex: 10000,
            lineHeight: 1,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1.0)";
            e.currentTarget.style.opacity = "0.7";
          }}
          aria-label="Close overlay"
        >
          &times;
        </button>

        {/* ✅ iframe으로 web5-2 불러오기 */}
        <iframe
          src={src}
          title="web5-2"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </div>
    </div>
  );
}
