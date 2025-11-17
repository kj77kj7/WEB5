// ===== 배경 이미지 =====
export const IMAGE_SRC = "/WEB5/images/002-1.jpg";

// ===== 오버레이 설정 =====
export const OVERLAYS = [
  { src: "/WEB5/images/대사1.png", show: "1.0%",  left: "2.25vw",   top: "14vh", bottom: "46.3vh" },
  { src: "/WEB5/images/대사2.png", show: "2.4%",  left: "40vw",     top: "34vh", bottom: "25vh" },
  { src: "/WEB5/images/대사3.png", show: "4.0%",  left: "50vw",     top: "9.2vh",  bottom: "56.8vh" },
  { src: "/WEB5/images/대사4.png", show: "7.5%",  left: "70vw",     top: "20.4vh", bottom: "26vh" },
  { src: "/WEB5/images/대사5.png", show: "18%",   left: "36vw",     top: "7.4vh",  bottom: "63vh" },
  { src: "/WEB5/images/대사6.png", show: "32%",   left: "60vw",     top: "0vh",    bottom: "51vh" },
];

// ===== Smooth Inertia Params =====
const INERTIA_ACCEL    = 0.60;
const INERTIA_FRICTION = 0.88;
const FOLLOW_GAIN      = 0.22;
const MIN_VY_STOP      = 0.06;

export const OVERLAY_SPEED = 1.0;
export const SCROLL_STEP   = 50;
export const EASE_FACTOR   = 0.15;
export const STOP_EPS      = 0.4;

export const START_SCALE   = 0.6;
export const APPEAR_RANGE  = 160;

// ===== GNB 로고 / 메뉴 =====
export const LOGO_SRC         = "/WEB5/images/logo.png";
export const LOGO_OFFSET_TOP  = "2.3148vh";
export const LOGO_OFFSET_LEFT = "0.5208vw";
export const LOGO_WIDTH       = "7.2917vw";
export const LOGO_HEIGHT      = "auto";

export const MENU_ITEMS = ["Character", "Animation", "Test", "Goods", "About Us"];
export const MENU_LEFT_OFFSET        = "14.0625vw";
export const MENU_TOP_OFFSET         = "5.5556vh";
export const MENU_FONT_SIZE_PX       = "1.1458vw";
export const MENU_LETTER_SPACING_PX  = "0.1146vw";
export const MENU_GAP_PX             = "3.125vw";

// ===== 오른쪽 확장 패널 =====
export const EXTRA_VIDEO_PANEL_WIDTH = 1920;
export const EXTRA_BG_PANEL_WIDTH    = 3840;

// ===== 비디오·배경 이미지 =====
export const VIDEO_SRC  = "/WEB5/videos/sample.mp4";
export const BG_IMG_SRC = "/WEB5/images/배경1.png";

export const BG0_IMG_SRC     = "/WEB5/images/배경0.png";
export const BG0_PANEL_WIDTH = 2820;

// ===== 캡션 =====
export const CAPTION_TEXT          = "GOING FOR A TEST   →";
export const CAPTION_FONT_SIZE     = "min(2.0833vw, 3.7037vh)";
export const CAPTION_MARGIN_LEFT   = "75vw";
export const CAPTION_MARGIN_TOP    = "49.0741vh";
export const CAPTION_MARGIN_BOTTOM = "5.5556vh";

// ===== 외부 링크 =====
export const EXTERNAL_URL = "https://smore.im/quiz/aFbN246J8S";

// ===== 커서 이미지 =====
// (여기도 대문자 WEB5 적용)
export const CURSOR_PNG_CANDIDATES = [
  "/WEB5/cursor.png",
  "/WEB5/images/cursor.png",
  "/WEB5/assets/cursor.png"
];

export const CURSOR_HOTSPOT_X = 8;
export const CURSOR_HOTSPOT_Y = 8;
export const MAX_CURSOR_SIZE  = 64;

// ===== 메뉴 스와이프 파라미터 =====
export const MENU_SWIPE_PX_PER_MS = 0.2;
export const MENU_SWIPE_MIN_MS    = 2500;
export const MENU_SWIPE_MAX_MS    = 3500;

// ===== 메뉴 클릭 스크롤 타깃 =====
export const MENU_SCROLL_TARGETS = {
  Character: 0,
  Animation: 10000,
  Test:      13000,
  Goods:     6800,
  "About Us": 9800,
};

// ===== WEB5-2 링크 =====
export const WEB5_2_URL = "https://kj77kj7.github.io/web5-2/";

