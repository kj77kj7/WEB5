// src/components/AnimationOverlay.jsx
import React, { useEffect, useRef } from "react";

export default function AnimationOverlay({ open, onClose, videoSrc }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (open && videoRef.current) {
      // 강제 재생 (브라우저 정책 우회)
      const playVideo = async () => {
        try {
          await videoRef.current.play();
        } catch (e) {
          console.log("Auto-play blocked:", e);
        }
      };

      videoRef.current.currentTime = 0; // 열릴 때 항상 0초에서 시작
      playVideo();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
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
        style={{
          position: "relative",
          width: "94%",
          height: "92%",
          background: "#000",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 닫기 버튼 */}
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
            color: "#fff",
            fontSize: 28,
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          &times;
        </button>

        {/* 🔥 자동재생 보장되는 비디오 */}
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          playsInline
          controls
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            background: "#000",
          }}
        />
      </div>
    </div>
  );
}
