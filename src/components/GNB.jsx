// src/components/GNB.jsx
import React from "react";
import {
  LOGO_SRC, LOGO_OFFSET_LEFT, LOGO_OFFSET_TOP, LOGO_WIDTH, LOGO_HEIGHT,
  MENU_ITEMS, MENU_GAP_PX, MENU_FONT_SIZE_PX, MENU_LETTER_SPACING_PX,
  MENU_LEFT_OFFSET, MENU_TOP_OFFSET
} from "../config/constants.js";

export default function GNB({ onItemClick, activeMenu, gnbFontFamily }) {
  return (
    <>
      <header
        className="gnb-logo"
        style={{
          // 기준을 뷰포트 좌측으로 정렬: calc(50% - 50vw) + offset(%)
          left: `calc(50% - 46vw + ${LOGO_OFFSET_LEFT})`,
          top: LOGO_OFFSET_TOP,
        }}
      >
        <img
          src={LOGO_SRC}
          alt="logo"
          style={{
            display: "block",
            width: LOGO_WIDTH,
            height: LOGO_HEIGHT,
            objectFit: "contain",
            userSelect: "none",
          }}
        />
      </header>

      <nav
        className="gnb"
        style={{
          left: `calc(50% - 50vw + ${MENU_LEFT_OFFSET})`,
          top: MENU_TOP_OFFSET,
          gap: MENU_GAP_PX,
          fontFamily: gnbFontFamily,
          fontSize: MENU_FONT_SIZE_PX,
          letterSpacing: MENU_LETTER_SPACING_PX,
        }}
      >
        {MENU_ITEMS.map((label) => (
          <a
            key={label}
            href="#"
            className="gnb-item"
            /* 활성 메뉴(클릭 직후)만 검정 #000, 호버 시는 CSS가 #161617로 오버라이드 */
            style={{ color: activeMenu === label ? "#000" : "inherit" }}
            onClick={(e) => {
              e.preventDefault();
              onItemClick(label);
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
