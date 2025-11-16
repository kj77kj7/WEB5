// src/components/ImageOverlay.jsx
import React from "react";

// ✅ WebAppOverlay와 동일한 프레임(모양/크기), 내부만 이미지 전용으로 구성
export default function ImageOverlay({ open, onClose, src, alt = "image" }) {
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
        zIndex: 100000,
      }}
    >
      <div
        className="overlay-inner"
        style={{
          position: "relative",
          width: "94%",
          height: "92%",
          background: "#000",              // 검은 배경(레터박스가 생길 때 자연스럽게)
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 닫기 버튼 (모양 동일) */}
        <button
          onClick={onClose}
          aria-label="Close overlay"
          style={{
            position: "absolute",
            top: 10,
            right: 16,
            width: 40,
            height: 40,
            border: 0,
            borderRadius: "999px",
            background: "rgba(255,255,255,0.1)",
            color: "#000",
            fontSize: 28,
            lineHeight: "40px",
            textAlign: "center",
            cursor: "pointer",
            opacity: 0.9,
            transition: "transform .18s ease, opacity .18s ease, background .18s ease",
            zIndex: 2,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.06)";
            e.currentTarget.style.background = "rgba(255,255,255,0.16)";
            e.currentTarget.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1.0)";
            e.currentTarget.style.background = "rgba(255,255,255,0.10)";
            e.currentTarget.style.opacity = "0.9";
          }}
        >
          &times;
        </button>

        {/* ✅ 핵심: 이미지가 프레임 안에 '모두' 보이게(contain), 중앙 정렬 */}
        <img
          src={src}
          alt={alt}
          className="overlay-image"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "100%",
            height: "100%",
            objectFit: "cover",          // ← 잘림 없이 전체 표시
            objectPosition: "center center",
            display: "block",
            userSelect: "none",
            pointerEvents: "auto",
            // 박스 내부 여백 제거(잘린 것처럼 보이는 여백 방지)
            boxSizing: "border-box",
            margin: 0,
          }}
        />
      </div>
    </div>
  );
}
