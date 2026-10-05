import { useState } from "react";
import "./ProjectTimeline.css";
import discordArch from "../assets/discord_arch.png";
import ia2eArch from "../assets/IA2E_arch.png";
import hotelArch from "../assets/hotel_arch.png";
import bookArch from "../assets/book_arch.png";

// ─────────────────────────────────────────────────────────────────────────────
// 데이터
// ─────────────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1,
    year: "2026",
    period: "2026.02 — 2026.07",
    title: "discord - 디스코드 멀티기능 봇",
    tagline:
      "Discord.js 기반으로 음악 재생, TTS, AI 대화, 슬래시 커맨드를 통합한 운영형 봇 프로젝트.",
    type: "side",
    role: "End to End",
    team: { type: "solo", desc: "개인 프로젝트", icon: "💻" },
    infra: discordArch,
    arch: [
      { label: "Presentation", color: "#2563eb", text: "UI & Controller - 봇 소개, 대시보드 화면 및 웹 API 엔드포인트" },
      { label: "Event Gateway", color: "#1a5e09", text: "Discord Gateway - 이벤트 수신 및 상호작용 처리" },
      { label: "Interaction", color: "#b8028a", text: "Slash Commands - 기능 단위 명령 실행" },
      { label: "Voice Engine", color: "#008caf", text: "Shoukaku/Lavalink - 음성 채널 재생 및 큐 제어" },
      { label: "Intelligence", color: "#1b129b", text: "Talk Runtime - 메시지 기반 AI 응답 및 Function Calling 기반 기능 제어" },
      { label: "Persistence", color: "#059669", text: "Repository - Sequelize 기반 DB 쿼리 실행 및 데이터 조작" },
      { label: "Data", color: "#db4531", text: "Model - 데이터베이스 테이블 구조 정의 및 데이터 타입 관리" },
    ],
    stack: {
      Runtime: ["Express.js"],
      Platform: ["Discord.js"],
      AI: ["Gemini API"],
      Audio: ["Lavalink", "Shoukaku", "FFmpeg"],
      Database: ["Sequelize", "Oracle"],
      Infra: ["Oracle Cloud", "Docker Compose", "Jenkins", "CI/CD"],
    },
    tasks: [
      { text: "Lavalink 노드 연결 상태 관리 고가용 전략 구성", tags: ["Audio"], tagType: "side" },
      { text: "TTS 오디오를 HTTP 엔드포인트로 제공하는 런타임 구성", tags: ["Audio", "TTS"], tagType: "side" },
      { text: "AI 응답 및 Function Calling 기반 AI Agent 봇으로 디스코드 기능 제어", tags: ["구현", "AI"], tagType: "side" },
      { text: "에이전틱 루프 및 재생 로직(배열 형태로 확장) 병렬 처리로 처리 속도 최대 9배 향상", tags: ["성능", "AI"], tagType: "team" },
      { text: "주요 데이터 집계 및 sentry 연동으로 빠른 오류 대응 환경 구성", tags: ["모니터링"], tagType: "team" },
      { text: "Docker Compose 기반 다중 컨테이너 관리", tags: ["Infra", "Docker"], tagType: "study" },
      { text: "Oracle Cloud 배포 및 Jenkin 기반 CI/CD 파이프라인 구축", tags: ["Infra", "CI/CD"], tagType: "study" },
    ],
    troubles: [
      {
        q: "lavalink 'this video requires login' 오류로 youtube 재생 실패 문제",
        a: "lavalink에 ytcipher 플러그인을 추가하고, youtube 서명 해독과 클라이언트를 OAuth 로그인 지원하는 TVHTML을 사용하여 재생하였습니다.",
      },
      {
        q: "사용자가 모두 나간 뒤에도 봇이 채널에 남는 문제",
        a: "voiceStateUpdate에서 사용자 수를 검증하고 자동 정리 로직을 추가해 리소스 점유를 줄였습니다.",
      },
      {
        q: "첫 요청 + 1일 주기로 refresh_token 발급 과정으로 1번씩 재생에 실패하는 문제",
        a: "lavalink-prewarm 컨테이너를 함께 띄워서 처음 1회 + 1일 주기로 lavalink에 더미 요청을 보내 토큰 재발급 받도록하였습니다.",
      },
      {
        q: "노래 추천 시스템 UI 기반 페이지 업데이트 과정에서의 불필요한 API 호출 문제",
        a: "이전/다음 페이지로 넘어가는 과정에서 매번 API 기반의 데이터를 가져오지 않고, 초기 1회 호출 & 사용자별로 결과를 캐싱해두어 불필요한 호출을 최소화 하였습니다.",
      },
      {
        q: "노래 추천 과정이 처리량에 따라 응답 속도가 크게 지연되는 문제",
        a: "순차적으로 처리되던 노래 유효성 검증 과정을 병렬로 처리하여 평균 응답 속도를 6103ms -> 1667ms로 개선했습니다. ",
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/DragonCastle7512/discord" },
      { label: "Demo Link", href: "https://chisabot.duckdns.org" }
    ],
  },
  {
    id: 2,
    year: "2026",
    period: "2026.05 — 2026.05",
    title: "hanul-keyboard - 천지인 커스텀 키보드 (IME)",
    tagline:
      "이전에는 존재했던(지금은 사라진) '한울 키보드'의 키보드 배열을 재현한 IME 앱",
    type: "side",
    role: "End to End",
    team: { type: "solo", desc: "개인 프로젝트", icon: "⌨️" },
    arch: [
      { label: "Presentation", color: "#2563eb", text: "HanulKeyboard UI - 테마 연동(Context API) 및 입력 모드(한글/영어/기호)별 반응형 키패드 레이아웃" },
      { label: "System Hook", color: "#b8028a", text: "InputMethodService - 안드로이드 OS 수준의 시스템 키보드 활성화 및 입력 필드 포커싱 라이프사이클 제어" },
      { label: "Bridge", color: "#008caf", text: "IMEModule (Native Module) - React Native와 Android Native InputConnection 간의 글자 입력/선택 영역 동기화" },
      { label: "Logic Engine", color: "#d97706", text: "KeyboardStateManager - 천지인 낱글자(ㅣ, ·, ㅡ) 자음/모음 입력 이벤트 처리 및 자모 조합 상태 관리" },
      { label: "Persistence", color: "#059669", text: "AsyncStorage - 키보드 테마 등의 사용자 개인 환경 설정 데이터" }
    ],
    stack: {
      Frontend: ["React Native", "Expo", "TypeScript"],
      Library: ["hangul-js"],
      Native: ["Kotlin", "Android SDK"],
    },
    tasks: [
      { text: "Android InputMethodService를 커스텀 구현하여 OS 시스템 키보드 등록 인터페이스 설계", tags: ["구현", "Native"], tagType: "side" },
      { text: "Kotlin 기반 IMEModule을 통해 React Native UI 이벤트와 Android InputConnection 간의 글자 입력/삭제/커서이동(commitText, setComposingText, finishComposingText) 브릿징", tags: ["구현", "Native"], tagType: "side" },
      { text: "KeyboardStateManager와 hangul-js를 활용하여 천지인 한글(ㅣ, ·, ㅡ) 자음/모음 조합 입력 상태 기계 및 실시간 문자 완성 알고리즘 설계", tags: ["구현", "알고리즘"], tagType: "side" },
      { text: "테스트 코드 작성 및 검증을 통한 회귀 버그 최소화", tags: ["테스트"], tagType: "team" },
      { text: "expo 클라우드 빌드를 활용하여 apk 파일 배포", tags: ["Build"], tagType: "study" },
    ],
    troubles: [
      {
        q: "텍스트 입력창 포커스 변경 시 이전 입력 상태(조합 중인 낱글자)가 유지되는 문제",
        a: "다른 입력창으로 포커스가 이동할 때 이전 버퍼가 남아 오입력이 발생했습니다. onStartInput 이벤트 발생 시 React Native 측으로 onResetState 이벤트를 전송하여 입력 버퍼와 자모 조합 엔진의 상태를 강제 초기화하도록 설계했습니다."
      },
      {
        q: "키보드 전환 시 내비게이션 바 등 단말기 하단 영역의 렌더링 높이 계산이 어긋나 키보드가 잘리는 문제",
        a: "기기마다 내비게이션 바 높이가 달라 고정 높이 적용 시 렌더링이 깨지는 현상이 있었습니다. 디바이스 치수를 동적으로 읽어 DP로 변환하고, 전달하여 안정적인 반응형 레이아웃을 구현했습니다."
      },
      {
        q: "글자 조합(setComposingText) 및 커서 이동 중 Native onUpdateSelection과 JS 입력 엔진 간 무한 동기화 루프가 돌며 커서가 꼬이는 문제",
        a: "네이티브 조합 갱신이 또 다른 selection 이벤트를 발생시켜 양방향 무한 호출이 유발되었습니다. Kotlin 네이티브 측 조합 동작 처리 시 50ms 동안 플래그를 두어 내부 업데이트에 따른 Selection 변경 알림을 차단함으로써 루프를 방지했습니다."
      }
    ],
    links: [{ label: "GitHub", href: "https://github.com/DragonCastle7512/hanul-keyboard" }, ],
  },
  {
    id: 3,
    year: "2026",
    period: "2026.04 — 2026.05",
    title: "calendar - 안드로이드 위젯 지원 달력",
    tagline:
      "불필요하게 복잡한 기능은 전부 간소화 시켜 핵심 기능인 캘런더 + 메모만을 편리하게 조작 가능한 달력 앱.",
    type: "side",
    role: "End to End",
    team: { type: "solo", desc: "개인 프로젝트", icon: "📅" },
    arch: [
      { label: "Presentation", color: "#2563eb", text: "MemoWidget & App UI - 홈 화면 위젯 뷰 렌더링 및 모바일 앱 내 캘린더 화면" },
      { label: "Scheduler", color: "#008caf", text: "AlarmManager & BroadcastReceiver - 매일 자정 위젯 강제 날짜 갱신 및 기기 시간/시간대 설정 변경 스케줄러" },
      { label: "Logic Engine", color: "#d97706", text: "lunar-javascript & Holiday Calc - 매년 음력 24절기 및 변동 국가 공휴일/대체 휴일 계산 알고리즘 수행" },
      { label: "Task Handler", color: "#1b129b", text: "widgetTaskHandler - 위젯 클릭 이벤트 디바운스 처리 및 라이프사이클 이벤트 연계 비즈니스 로직 제어" },
      { label: "Persistence", color: "#059669", text: "AsyncStorage - 공휴일 API 호출 캐시 데이터 및 유저 작성 일정 메모, 위젯 설정 파라미터 보존" }
    ],
    stack: {
      Frontend: ["React Native", "Expo", "TypeScript", "expo-router"],
      Library: ["react-native-calendars", "react-native-android-widget", "lunar-javascript"],
      Native: ["Kotlin", "Java", "Android SDK", "AlarmManager"],
      Build: ["Expo Config Plugin"],
    },
    tasks: [
      { text: "앱과 위젯 달력 및 HandlerState 관리로 Draggable 방식의 인터랙티브 메모 컴포넌트 구현", tags: ["구현"], tagType: "side" },
      { text: "Kotlin 기반 WidgetUpdateScheduler 및 AlarmManager 연동을 통한 매일 자정 위젯 자동 업데이트 백그라운드 태스크 구현", tags: ["구현", "Native"], tagType: "side" },
      { text: "lunar-javascript를 활용한 음력 윤달/명절 및 매년 변동되는 대체 공휴일 계산 기능 통합 구현", tags: ["구현", "알고리즘"], tagType: "side" },
      { text: "불필요한 API 호출 방지 및 지연시간 최소화를 위해 공휴일 정보를 최초 1회만 받아와 캐싱", tags: ["성능"], tagType: "team" },
      { text: "빌드 타임에 AndroidManifest.xml 권한 설정과 BroadcastReceiver 동적 등록을 자동화하는 Expo Config Plugin 작성", tags: ["Build", "Plugin"], tagType: "study" },
      { text: "Docker 기반 로컬 aab 파일 빌드 및 play console 배포", tags: ["Infra", "Docker"], tagType: "study" },
    ],
    troubles: [
      {
        q: "하루가 경과한 이후 위젯의 오늘 날짜가 어제 날짜 그대로 표기되는 문제",
        a: "매일 자정 알림 스케줄러 도입 및 기기 설정을 통해 시간을 강제로 변경하거나 표준 시간대를 바꿀 경우를 대비해, TIME_SET, TIMEZONE_CHANGED 이벤트를 감지하는 네이티브 리시버를 등록하여 즉각 갱신시키도록 하였습니다."
      },
      {
        q: "이전/다음 달 이동 시 비동기 렌더링 지연으로 인한 연속 터치 시 위젯 UI 데이터가 꼬이는 문제",
        a: "AsyncStorage에 클릭 액션의 renderTime 타임스탬프를 함께 캐싱하고, 300ms 디바운스 제어 및 이전 렌더링 타임보다 오래된 클릭 요청은 무시하도록 필터링 로직을 개발했습니다."
      },
      {
        q: "위젯이 유휴상태로 전환된 이후 날짜 전환이 매우 느려지는 문제",
        a: "모든 날짜 딥링크 연결, 랜더링 등으로 약 2400ms 걸리는 네이티브 지연을 Dual-Phase Rendering(선 랜더링 이후 딥링크 연결) PendingIntent 캐싱, 컴포넌트 최적화(useMemo 활용) 등으로 약 1180ms의 지연시간을 단축시켰습니다."
      },
      {
        q: "앱 프로세스가 죽어있는 상태에서 위젯 상호작용이 먹통인 문제",
        a: "Linking.openURL 방식에서 OPEN_URI 방식으로 변경하여 앱이 죽어있는 상태라면 앱 실행 이후 상호작용이 수행되도록 수정하였습니다."
      }
    ],
    links: [{ label: "GitHub", href: "https://github.com/DragonCastle7512/calendar" }],
  },
  {
    id: 4,
    year: "2026",
    period: "2026.01 — 2026.02",
    title: "IA2E - 통합 AI API 호출",
    tagline:
      "복수 AI API를 통합 호출하고 실시간 응답 스트리밍, 인증/인가, 보안 중심 계정 체계를 구현한 개인 프로젝트.",
    type: "study",
    role: "End to End",
    team: { type: "solo", desc: "개인 프로젝트", icon: "💻" },
    infra: ia2eArch,
    arch: [
      { label: "Routing", color: "#d97706", text: "Router - HTTP 메서드와 경로에 따라 요청을 적절한 컨트롤러로 분배" },
      { label: "Middleware", color: "#008caf", text: "Auth - 인증/인가 및 요청 데이터 사전 검증" },
      { label: "Presentation", color: "#2563eb", text: "Controller - 요청 파라미터 추출, 유효성 검사 및 최종 응답 반환" },
      { label: "Persistence", color: "#059669", text: "Repository - Sequelize 기반 DB 쿼리 실행 및 데이터 조작" },
      { label: "Data", color: "#db4531", text: "Model - 데이터베이스 테이블 구조 정의 및 데이터 타입 관리" },
    ],
    stack: {
      Frontend: ["HTML", "CSS", "JavaScript"],
      Backend: ["Express.js"],
      AI: ["Gemini API", "Mistralai API"],
      Database: ["PostgreSQL", "Supabase", "Sequelize"],
      Infra: ["Oracle Cloud", "GitHub Action", "CI/CD"],
      Security: ["JWT", "OAuth"],
    },
    tasks: [
      { text: "Gemini, Mistral API 기반 실시간(Streaming) 응답 처리와 히스토리 기능 구현", tags: ["구현", "AI"], tagType: "side" },
      { text: "Nodemailer 기반 이메일 인증 및 회원가입 플로우 구현", tags: ["구현", "메일"], tagType: "side" },
      { text: "CSS 변수를 활용해 확장성 높은 테마 변경 구조를 설계·구현", tags: ["구현", "UI"], tagType: "side" },
      { text: "OAuth 기반 구글 로그인 제공 및 JWT 기반 URL/파일 리소스 인증·인가", tags: ["보안"], tagType: "team" },
      { text: "민감 데이터 암호화 및 데이터 무결성을 고려한 테이블 설계", tags: ["DB", "보안"], tagType: "team" },
      { text: "Oracle Cloud 배포 및 GitHub Action 기반 CI/CD 구축", tags: ["Infra", "CI/CD"], tagType: "study" },
    ],
    troubles: [
      {
        q: "OAuth 회원가입 시 동일 이메일 계정 충돌이 발생한 문제",
        a: "일반 가입 계정과 OAuth 계정을 식별/매핑하는 검증 로직을 추가해 중복 생성 없이 계정 연동이 가능하도록 개선했습니다.",
      },
      {
        q: "CSRF 취약점 대응과 인증 안정성 강화가 필요한 문제",
        a: "인증 미들웨어를 정비하고 쿠키 SameSite: Lax 설정을 적용해 CSRF 위험을 줄이고 데이터 무결성을 확보했습니다.",
      },
      {
        q: "메시지 추가마다 전체 JSON 데이터를 재작성하는 Update Overhead 발생 및 성능 저하 문제",
        a: "기존에 JSONB 타입으로 선언한 chats 칼럼을 점규화하여, 쓰기 작업의 시간 복잡도를 일정하게 유지했습니다.",
      },
      {
        q: "API 키 등록 및 표기 과정에서의 보안 취약점 문제",
        a: "사용자 키 노출 방지를 위해 '클라이언트 단 1회 입력, DB 암호화 저장, 서버 내 로직 제한, 비트마스킹값 응답'을 통한 종단간 보안 체계를 구축했습니다."
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/DragonCastle7512/IA2E" }],
  },
  {
    id: 5,
    year: "2025",
    period: "2025.10 — 2025.12",
    title: "HotelHub - 호텔 예약 사이트",
    tagline:
      "호텔 검색/예약 서비스에서 대용량 조회 성능 최적화와 검색 UX 고도화, 외부 API 연동을 수행한 팀 프로젝트.",
    type: "team",
    role: "End to End",
    team: { type: "team", desc: "5인 팀", icon: "👥" },
    arch: [
      { label: "Security", color: "#008caf", text: "Filter Chain - JWT 검증 및 권한 별 인증/인가" },
      { label: "Presentation", color: "#2563eb", text: "Controller - HTTP 요청 검증 및 응답 반환" },
      { label: "Business", color: "#d97706", text: "Service - 비즈니스 로직 수행 및 트랜잭션 관리" },
      { label: "Persistence", color: "#059669", text: "Repository - JPA 기반 데이터 영속화 및 DB 접근" },
      { label: "Data", color: "#db4531", text: "Entity - 실제 데이터 모델 및 영속성 컨텍스트 관리" },
    ],
    infra: hotelArch,
    stack: {
      Frontend: ["HTML", "CSS", "JavaScript", "Vue.js"],
      Backend: ["Java", "Spring Boot"],
      Database: ["MariaDB", "JPA"],
      Infra: ["AWS", "Docker", "GitHub Action", "CI/CD"],
      Security: ["Spring Security", "JWT"]
    },
    tasks: [
      { text: "초성 검색 및 검색어 추천(자동 완성) 기능을 제안·구현해 검색 편의성 향상", tags: ["구현"], tagType: "side" },
      { text: "Kakao 지도 API 연동으로 위치 기반 데이터 표현 강화", tags: ["구현", "API"], tagType: "side" },
      { text: "검색 페이지에 무한 스크롤 페이징을 도입해 평균 응답 속도 260ms → 180ms로 단축 및 UX 개선", tags: ["성능", "UX"], tagType: "team" },
      { text: "Tour API 호텔 정보와 지역 데이터(초성 가공 포함)를 DB와 초기 데이터 동기화", tags: ["DB", "API"], tagType: "team" },
    ],
    troubles: [
      {
        q: "예약 정보 도입 이후에 발생한 급격한 성능 저하 문제",
        a: "예약 정보 조회 쿼리에서 발생한 N+1 문제를 해결해 100건 기준 평균 응답 속도를 301ms → 71ms로 개선했습니다."
      },
      {
        q: "대량 데이터(2,000건 데이터로 확장)에서 급격한 성능 저하가 발생한 문제",
        a: "실행 계획을 분석 및 인덱스를 설계/적용해 응답 시간을 2570ms에서 260ms까지 개선했습니다.",
      },
      {
        q: "로그인 과정에서 브루트포스 취약점이 발견된 문제",
        a: "reCAPTCHA를 도입해 자동화된 대량 로그인 시도를 차단하고 인증 보안을 강화했습니다.",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/DragonCastle7512/Hotel_booking_backend" }],
  },
  {
    id: 6,
    year: "2025",
    period: "2025.08 — 2025.09",
    title: "BookForest - 서적 구매 사이트",
    tagline:
      "서적 구매 서비스를 구축하며 조회 성능 개선, 보안 강화, 인프라 마이그레이션과 배포 자동화를 담당한 팀 프로젝트.",
    type: "team",
    role: "End to End",
    team: { type: "team", desc: "5인 팀", icon: "👥" },
    arch: [
      { label: "Security", color: "#008caf", text: "Filter Chain - 권한 별 인증/인가" },
      { label: "Presentation", color: "#2563eb", text: "Controller - HTTP 요청 검증 및 응답 반환" },
      { label: "Business", color: "#d97706", text: "Service - 비즈니스 로직 수행 및 트랜잭션 관리" },
      { label: "Persistence", color: "#059669", text: "Repository - Mybatis 기반 데이터 영속화 및 DB 접근" },
      { label: "Data", color: "#db4531", text: "Mapper - 비즈니스 데이터 객체 및 속성 관리" },
    ],
    infra: bookArch,
    stack: {
      Frontend: ["HTML", "CSS", "JavaScript"],
      Backend: ["Java", "Spring", "JSP"],
      Database: ["Oracle", "MySQL", "Mybatis"],
      Infra: ["AWS", "Terraform", "GitHub Action", "CI/CD"],
    },
    tasks: [
      { text: "WebSocket 기반 통계 현황 실시간 처리로 사용자 경험 증대", tags: ["구현", "WebSocket"], tagType: "side" },
      { text: "구매목록 호출 과정의 N+1 문제 해결로 N*4+1 호출 구조를 단일 호출로 개선해 오버헤드 최소화", tags: ["성능"], tagType: "team" },
      { text: "Mybatis ${} 사용 구간에 백엔드 API 화이트리스트 검증을 적용해 SQL Injection 위험 예방", tags: ["보안"], tagType: "team" },
      { text: "AWS 기반 인프라 설계 및 배포/유지보수", tags: ["Infra"], tagType: "study" },
      { text: "CI/CD 구축 및 Terraform 자동화를 통해 배포 편의성과 일관성 강화", tags: ["Infra", "CI/CD"], tagType: "study" },
    ],
    troubles: [
      {
        q: "AWS Free-tier 제약으로 Oracle DB 기반 배포가 불가능했던 문제",
        a: "서비스 운영 가능성을 우선해 Oracle에서 MySQL로 마이그레이션을 수행했고, 데이터 구조와 쿼리를 재정비해 배포 이슈를 해결했습니다.",
      },
      {
        q: ".setting 폴더 공유로 지속적인 Git 충돌이 발생한 문제",
        a: "캐시를 삭제하고 .gitignore에 등록해 추적을 완전히 제거하여 팀 개발 중 반복 충돌을 해소했습니다.",
      },
      {
        q: "봇을 이용한 디렉토리 브루트포트 취약점 문제",
        a: "봇 공격 로그를 분석하고 Rate Limit을 도입해 취약점을 대응하였습니다."
      },
      {
        q: "커넥션 풀 고갈로 인해 서버가 다운되는 문제",
        a: "원인 추적 및 로그인 로직 검토를 통해 close 과정이 생략되어 쌓이던 SqlSession을 auto close 문법을 적용하여, 닫아주었습니다."
      }
    ],
    links: [{ label: "GitHub", href: "https://github.com/DragonCastle7512/BookStore/tree/master" }],
  },
  {
    id: 7,
    year: "2024",
    period: "2024.06 - 2025.02",
    title: "Magical Travel - 2D 생존 액션 RPG",
    tagline:
      "사방에서 몰려오는 적을 상대하며 스테이지 목표를 달성하는 바닐라 JavaScript 기반 생존 액션 게임 프로젝트.",
    type: "side",
    role: "Frontend Develop",
    team: { type: "solo", desc: "개인 프로젝트", icon: "🎮" },
    arch: [
      { label: "Presentation", color: "#2563eb", text: "HUD - Canvas 기반 인터페이스" },
      { label: "Input & Control", color: "#d97706", text: "Keyboard State - 키 입력 상태 저장 및 이동과 스킬 시전 제어" },
      { label: "Engine Core", color: "#059669", text: "Loop - requestAnimationFrame 루프 처리" },
      { label: "Game Logic", color: "#db4531", text: "Combat, Stage - 스킬/리소스, 스테이지 흐름" },
      { label: "Physics Engine", color: "#008caf", text: "Hit Detection - 예외 케이스 포함 충돌 판정 제어" },
    ],
    stack: {
      Frontend: ["HTML", "CSS", "JavaScript"],
      Rendering: ["Canvas", "requestAnimationFrame"],
      Deploy: ["Netlify"],
    },
    tasks: [
      { text: "WASD 이동, 스킬(스페이스/Q/E/R), 레벨/스탯/스킬포인트 성장 구조 구현", tags: ["구현"], tagType: "side" },
      { text: "클래스 기반 객체 관리 및 충돌 물리엔진 구현", tags: ["구현", "물리엔진"], tagType: "side" },
      { text: "이미지 프리로드 및 반전 처리 등 렌더링 품질 개선", tags: ["성능", "그래픽"], tagType: "team" },
    ],
    troubles: [
      {
        q: "키를 길게 누를 때 이동이 끊겨 보이는 문제",
        a: "keydown 이벤트 즉시 이동 대신 키 상태 플래그를 저장하고 프레임 루프에서 이동을 처리해 부드러운 입력으로 개선했습니다.",
      },
      {
        q: "특정 충돌 패턴(십자 겹침)에서 판정이 누락되는 문제",
        a: "꼭짓점 포함 판정 외에 축 겹침 예외 조건을 추가해 누락 케이스를 보완했습니다.",
      },
      {
        q: "대각선 이동 시(키 동시에 누르는 경우) 이동 속도가 더 빠른 문제",
        a: "동시에 눌렀을 때 이동 속도를 줄여 동일한 거리를 이동하도록 수정했습니다."
      },
      {
        q: "일시 정지를 눌러도 시간이 지나면 발동하는 이벤트가 발생하는 문제",
        a: "기존에 setTimeout으로 동작하던 로직을 현재 requestAnimationFrame의 timer에 맞춰서 N초 후에 동작하도록 수정하였습니다."
      }
    ],
    links: [{ label: "GitHub", href: "https://github.com/DragonCastle7512/RpgProject" }],
  },
  {
    id: 8,
    year: "2023",
    period: "2023.12 - 2023.12",
    title: "MiniGame - 위험 구역 회피 생존 게임",
    tagline:
      "방향키로 캐릭터를 조작해 주기적으로 생성되는 위험 구역을 피하며 생존 시간을 늘리는 미니게임.",
    type: "side",
    role: "Frontend Develop",
    team: { type: "solo", desc: "개인 프로젝트", icon: "🎮" },
    arch: [
      { label: "Presentation", color: "#2563eb", text: "HUD - Canvas 기반 인터페이스 + 설정 보드/원 크기, 테마 조절" },
      { label: "Input & Control", color: "#d97706", text: "Keyboard State - 상하좌우 키 이동 제어" },
      { label: "Engine Core", color: "#059669", text: "Loop - requestAnimationFrame 루프 처리" },
      { label: "Game Logic", color: "#db4531", text: "Game State, Score - 위험구역 관리 및 시간에 비례한 점수" },
      { label: "Physics Engine", color: "#008caf", text: "Boundary & Hit - 경계/충돌 판정" },
    ],
    stack: {
      Frontend: ["HTML", "CSS", "JavaScript"],
      Rendering: ["Canvas", "requestAnimationFrame"],
      Deploy: ["Netlify"],
    },
    tasks: [
      { text: "Canvas 기반 실시간 이동/충돌 로직 구현", tags: ["구현"], tagType: "side" },
      { text: "위험 구역 생성 주기와 중복 생성 방지 로직 적용", tags: ["구현"], tagType: "side" },
      { text: "사용자 설정(보드 크기, 원 크기, 테마) 반영 UI 구성", tags: ["구현"], tagType: "side" },
    ],
    troubles: [
      {
        q: "플레이어 원이 게임 보드 밖으로 벗어나는 문제",
        a: "좌표 보정 수식을 수정해 경계 계산 오차를 제거했습니다.",
      },
      {
        q: "위험 구역 생성/소멸 타이밍이 불규칙해지는 문제",
        a: "이미 존재하는 구역 여부를 검사한 뒤 생성하도록 변경해 주기 안정성을 확보했습니다.",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/DragonCastle7512/mini_game" }],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 상수 / 유틸
// ─────────────────────────────────────────────────────────────────────────────

const TYPE_META = {
  team:  { label: "팀 프로젝트", dotColor: "#2563eb", badgeBg: "#eff4ff", badgeColor: "#2563eb" },
  side:  { label: "사이드 프로젝트", dotColor: "#16a34a", badgeBg: "#f0fdf4", badgeColor: "#16a34a" },
  study: { label: "학습 프로젝트",  dotColor: "#9333ea", badgeBg: "#faf5ff", badgeColor: "#9333ea" },
};

const TAG_META = {
  team:  { bg: "#eff7ff", color: "#257beb" },
  side:  { bg: "#f0fdf4", color: "#16a34a" },
  study: { bg: "#faf5ff", color: "#9333ea" },
};

function groupByYear(items) {
  const map = {};
  items.forEach((p) => {
    if (!map[p.year]) map[p.year] = [];
    map[p.year].push(p);
  });
  return Object.entries(map).sort((a, b) => Number(b[0]) - Number(a[0]));
}

// ─────────────────────────────────────────────────────────────────────────────
// 하위 컴포넌트
// ─────────────────────────────────────────────────────────────────────────────

/** 타임라인 노드 */
function TimelineNode({ project, isActive, onClick }) {
  const meta = TYPE_META[project.type] ?? TYPE_META.team;
  return (
    <div className={`pf-node${isActive ? " active" : ""}`} onClick={onClick}>
      <span className="pf-node-line" style={isActive ? { background: meta.dotColor } : {}} />
      <span
        className="pf-node-dot"
        style={{ background: meta.dotColor, border: "2px solid #fff" }}
      />
      <div className="pf-node-card">
        <div
          className="pf-node-role"
          style={isActive ? { color: meta.dotColor } : {}}
        >
          {meta.label}
        </div>
        <div className="pf-node-title">{project.title}</div>
        <div className="pf-node-period">{project.period}</div>
      </div>
    </div>
  );
}

/** 왼쪽 타임라인 패널 */
function TimelinePanel({ projects, activeId, onSelect }) {
  const groups = groupByYear(projects);
  return (
    <div className="pf-tl">
      {groups.map(([year, items]) => (
        <div key={year} className="pf-year-block">
          <div className="pf-year">{year}</div>
          <div className="pf-branch">
            <div className="pf-spine" />
            {items.map((p) => (
              <TimelineNode
                key={p.id}
                project={p}
                isActive={activeId === p.id}
                onClick={() => onSelect(p.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** 섹션 헤더 */
function SectionHeader({ num, title }) {
  return (
    <div className="pf-section-head">
      <span className="pf-section-num">{num}</span>
      <span className="pf-section-title">{title}</span>
      <span className="pf-section-rule" />
    </div>
  );
}

/** 오른쪽 상세 패널 */
function DetailPanel({ project }) {
  if (!project) {
    return (
      <div className="pf-detail">
        <div className="pf-empty">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="4" y="6" width="28" height="24" rx="3" />
            <path d="M11 13h14M11 18h10M11 23h7" />
          </svg>
          <p>프로젝트를 선택하면 상세 정보가 표시됩니다</p>
        </div>
      </div>
    );
  }

  const meta = TYPE_META[project.type] ?? TYPE_META.team;

  return (
    <div className="pf-detail">
      <div className="pf-dc" key={project.id}>

        {/* ── 히어로 ── */}
        <div className="pf-dc-hero">
          <div className="pf-dc-eyebrow">
            <span
              style={{
                fontSize: 10,
                fontFamily: "'DM Mono', monospace",
                padding: "2px 8px",
                borderRadius: 4,
                letterSpacing: ".04em",
                textTransform: "uppercase",
                background: meta.badgeBg,
                color: meta.badgeColor,
              }}
            >
              {meta.label}
            </span>
            <span>{project.period}</span>
          </div>
          <div className="pf-dc-title">{project.title}</div>
          <p className="pf-dc-tagline">{project.tagline}</p>
          <div className="pf-dc-meta">
            <span className="pf-pill">{project.role}</span>
            <span className="pf-pill">{project.team.desc}</span>
          </div>
        </div>

        {/* ── 01 개요 & 아키텍처 ── */}
        <div className="pf-section">
          <SectionHeader num="01" title="개요 & 아키텍처" />
          <div
            className="pf-team-row"
            style={{ background: "#fff", border: "1px solid #e8e6e1", borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}
          >
            <span
              className="pf-team-icon"
              style={{ background: project.team.type === "solo" ? "#faf5ff" : "#eff4ff" }}
            >
              {project.team.icon}
            </span>
            <div>
              <div className="pf-team-info">{project.team.desc}</div>
              <div className="pf-team-sub">{project.team.type === "solo" ? "개인 작업" : "협업"}</div>
            </div>
          </div>
          <div className="pf-arch-box">
            <div className="pf-arch-label">아키텍처 레이어</div>
            <div className="pf-arch-layers">
              {project.arch.map((a) => (
                <div key={a.label} className="pf-arch-layer">
                  <span className="pf-arch-layer-dot" style={{ background: a.color }} />
                  <span style={{ color: a.color, minWidth: 110, fontSize: 11 }}>{a.label}</span>
                  <span>{a.text}</span>
                </div>
              ))}
            </div>
          </div>
          { 
            project.infra &&
            <div className="pf-arch-box">
              <div className="pf-arch-label">인프라 아키텍처</div>
              <div className="pf-arch-layers">
                <img src={project.infra} style={{ maxWidth: 700}} alt="Infrastructure Diagram"/>
              </div>
            </div>
          }
        </div>

        {/* ── 02 기술 스택 ── */}
        <div className="pf-section">
          <SectionHeader num="02" title="기술 스택" />
          <div className="pf-stack-groups">
            {Object.entries(project.stack).map(([group, chips]) => (
              <div key={group} className="pf-stack-group">
                <div className="pf-stack-group-label">{group}</div>
                <div className="pf-stack-chips">
                  {chips.map((c) => (
                    <span key={c} className="pf-stack-chip">{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 03 주요 업무 ── */}
        <div className="pf-section">
          <SectionHeader num="03" title="주요 업무" />
          <ul className="pf-tasks">
            {project.tasks.map((t, i) => {
              const tagMeta = TAG_META[t.tagType] ?? TAG_META.team;
              const tags = Array.isArray(t.tags) ? t.tags : (t.tag ? [t.tag] : []);
              return (
                <li key={i} className="pf-task">
                  <span className="pf-task-bullet" />
                  <div>
                    <div className="pf-task-text">{t.text}</div>
                    {tags.length > 0 && (
                      <div className="pf-task-tags">
                        {tags.map((tag, tagIndex) => (
                          <span
                            key={`${tag}-${tagIndex}`}
                            className="pf-task-tag"
                            style={{ background: tagMeta.bg, color: tagMeta.color }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ── 04 트러블슈팅 ── */}
        <div className="pf-section">
          <SectionHeader num="04" title="트러블슈팅" />
          <div className="pf-troubles">
            {project.troubles.map((t, i) => (
              <div key={i} className="pf-trouble">
                <div className="pf-trouble-q">
                  <span className="pf-trouble-q-icon">문제</span>
                  <span className="pf-trouble-q-text">{t.q}</span>
                </div>
                <div className="pf-trouble-a">→ {t.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 05 링크 ── */}
        {project.links.length > 0 && (
          <div className="pf-section">
            <SectionHeader num="05" title="링크" />
            <div className="pf-links">
              {project.links.map((l) => (
                <a key={l.label} href={l.href} className="pf-link" target="_blank" rel="noreferrer">
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 메인 컴포넌트
// ─────────────────────────────────────────────────────────────────────────────

export default function PortfolioTimeline({
  name = "김용성",
  subtitle = "Backend Engineer",
  projects = PROJECTS,
}) {
  const [activeId, setActiveId] = useState(null);
  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  return (
    <>
      <div className="pf-root">
        {/* 헤더 */}
        <div className="pf-header">
          <span className="pf-header-name">{name}</span>
          <span className="pf-header-dot">·</span>
          <span className="pf-header-sub">{subtitle}</span>
          <span className="pf-header-dot">·</span>
          <span className="pf-header-sub">Portfolio Timeline</span>
        </div>

        {/* 바디 */}
        <div className="pf-body">
          <TimelinePanel
            projects={projects}
            activeId={activeId}
            onSelect={setActiveId}
          />
          <DetailPanel project={activeProject} />
        </div>
      </div>
    </>
  );
}
