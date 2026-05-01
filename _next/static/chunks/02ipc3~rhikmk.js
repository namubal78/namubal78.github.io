(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,43911,e=>{"use strict";var t=e.i(43476),s=e.i(71645);e.s(["HelpButton",0,function({onClick:e}){return(0,t.jsx)("button",{onClick:t=>{t.preventDefault(),t.stopPropagation(),e()},className:"inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-700 hover:bg-indigo-600 text-white text-[11px] font-bold transition-colors cursor-pointer shrink-0 leading-none",title:"구현 상세 보기",children:"!"})},"HelpModal",0,function({title:e,onClose:i,children:a}){return(0,s.useEffect)(()=>{let e=e=>{"Escape"===e.key&&i()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[i]),(0,t.jsx)("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",onClick:i,children:(0,t.jsxs)("div",{className:"bg-gray-900 border border-gray-700 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl",onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)("div",{className:"flex items-center justify-between px-6 py-4 border-b border-gray-800 sticky top-0 bg-gray-900 rounded-t-2xl",children:[(0,t.jsx)("h3",{className:"font-semibold text-white text-sm",children:e}),(0,t.jsx)("button",{onClick:i,className:"text-gray-500 hover:text-white transition-colors cursor-pointer p-1 rounded-md",children:(0,t.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),(0,t.jsx)("div",{className:"px-6 py-5 text-sm text-gray-300 space-y-4 leading-relaxed",children:a})]})})},"HelpSection",0,function({label:e,items:s}){return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2",children:e}),(0,t.jsx)("ul",{className:"space-y-1.5",children:s.map((e,s)=>(0,t.jsxs)("li",{className:"flex gap-2",children:[(0,t.jsx)("span",{className:"text-indigo-500 shrink-0 mt-0.5",children:"·"}),(0,t.jsx)("span",{children:e})]},s))})]})}])},12306,e=>{"use strict";var t=e.i(43476),s=e.i(71645),i=e.i(62319),a=e.i(43911);let r=[{id:4,sha:"4639e23",date:"2026-04-28",content:`## 변경 개요
은새월드 전용 서브 네비게이션 바를 구현하고, 기능 데모 섹션에 더미 데이터 기반 체험 페이지 4종을 추가했다.

## 핵심 변경
**BEFORE**: 메인 Navbar에 은새월드 링크가 나열되어 시각적으로 복잡했고, 데모 섹션은 3개뿐이었다.
**AFTER**: world/layout.tsx에 \`fixed top-16 h-10\` 서브 네비바를 추가해 메인/월드 영역을 명확히 분리. 데모 7종 (기존 3 + 신규 플래너\xb7운동\xb7앨범\xb7메신저).

## 기술 판단
서브 네비는 \`fixed top-16\`으로 메인 Navbar 바로 아래에 위치시키고, spacer div를 문서 흐름에 삽입해 컨텐츠가 가려지지 않게 처리. 채팅 페이지는 \`h-[calc(100vh-6.5rem)]\`으로 조정.

## 키워드
SubNavigation, WorldLayout, DemoPage, DummyData, TailwindCSS`},{id:3,sha:"524f293",date:"2026-04-24",content:`## 변경 개요
전체 UI를 gray-950 기반으로 통일하고 대규모 리팩터링을 진행했다.

## 핵심 변경
**BEFORE**: 페이지마다 배경색이 달랐고 컴포넌트 스타일이 불일치했다.
**AFTER**: 일관된 다크 테마, Tailwind \`backdrop-blur\`를 이용한 글래스모피즘 Navbar, 카드 hover 효과 통일.

## 기술 판단
Tailwind v4에서 \`@layer\` 방식 변경으로 globals.css를 정리. 모바일 \`min-h-screen\` 이슈를 \`dvh\` 단위로 해결하려 했으나 Safari 호환성 문제로 \`min-h-screen\`을 유지함.

## 키워드
UI Refactor, DarkTheme, TailwindCSS, GlassMorphism`},{id:2,sha:"0dcff5f",date:"2026-04-23",content:`## 변경 개요
포트폴리오 페이지 완성 및 Slack Bot 배포 알림 연동을 완료했다.

## 핵심 변경
**BEFORE**: 포트폴리오는 정적 카드 목록만 있었고, 배포 결과 알림이 없었다.
**AFTER**: 카테고리 필터(프론트/백엔드/전체), hover 애니메이션, GitHub Actions → Slack \`chat.postMessage\` 알림.

## 기술 판단
Slack Web API Bot Token을 Render 환경변수로 관리. GitHub Actions에서 \`curl\`로 직접 호출해 빌드 성공/실패 분기 알림을 구현함. 실패 시 HTTP 코드와 응답 로그(800자)를 첨부.

## 이슈
백엔드 재배포 중에 dev-log 워크플로우가 실행되어 cold start 401 응답이 슬랙 실패 알림으로 발송됨. 정상 동작 확인.

## 키워드
Portfolio, SlackAPI, CI/CD, GitHubActions`},{id:1,sha:"c0dd6d4",date:"2026-04-22",content:`## 변경 개요
프로젝트 README를 전면 갱신하고 포트폴리오 레이아웃 초안을 작성했다.

## 핵심 변경
**BEFORE**: README에 기본 설명만 있었고 포트폴리오 페이지가 없었다.
**AFTER**: 기술 스택\xb7배포 환경\xb7기능 목록을 포함한 구조화된 README. Tailwind grid 기반 포트폴리오 카드 레이아웃 초안.

## 기술 판단
Next.js 정적 export + GitHub Pages 제약상 \`generateStaticParams\`를 활용해 동적 경로를 빌드 타임에 정적 파일로 생성. ISR은 정적 export와 함께 사용 불가 확인.

## 키워드
README, Portfolio, Next.js, StaticExport`}];e.s(["default",0,function(){let[e,l]=(0,s.useState)(r[0].id),[n,o]=(0,s.useState)(!1);return(0,t.jsxs)("div",{className:"min-h-screen bg-gray-950 text-white",children:[(0,t.jsx)(i.default,{}),(0,t.jsxs)("main",{className:"max-w-4xl mx-auto px-6 pt-28 pb-16",children:[(0,t.jsx)("p",{className:"text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-1",children:"Demo · Draft"}),(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-1",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold",children:"개발 드래프트"}),(0,t.jsx)(a.HelpButton,{onClick:()=>o(!0)})]}),(0,t.jsx)("p",{className:"text-gray-500 text-sm mb-8",children:"커밋 push 시 Claude AI가 자동으로 작성하는 개발 일지. 이건 더미 데이터 샘플입니다."}),(0,t.jsx)("div",{className:"space-y-3",children:r.map(s=>(0,t.jsxs)("div",{className:"bg-gray-900 border border-gray-800 rounded-xl overflow-hidden",children:[(0,t.jsxs)("button",{onClick:()=>l(e===s.id?null:s.id),className:"w-full flex items-center justify-between px-5 py-4 hover:bg-gray-900/60 transition-colors cursor-pointer",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 text-left",children:[(0,t.jsx)("span",{className:"text-xs font-mono text-indigo-400 bg-indigo-950/50 px-2 py-0.5 rounded",children:s.sha}),(0,t.jsx)("span",{className:"text-sm text-white font-medium",children:new Date(s.date).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})})]}),(0,t.jsx)("span",{className:"text-gray-600 text-sm",children:e===s.id?"▲":"▼"})]}),e===s.id&&(0,t.jsx)("div",{className:"px-5 pb-5 border-t border-gray-800",children:(0,t.jsx)("div",{className:"mt-4 space-y-0.5",children:s.content.split("\n").map((e,s)=>e.startsWith("## ")?(0,t.jsx)("h3",{className:"text-sm font-semibold text-indigo-300 mt-4 mb-1",children:e.slice(3)},s):e.startsWith("**BEFORE**:")?(0,t.jsxs)("p",{className:"text-xs text-gray-400 mb-1",children:[(0,t.jsx)("span",{className:"text-red-400 font-semibold",children:"BEFORE"}),":",e.slice(11)]},s):e.startsWith("**AFTER**:")?(0,t.jsxs)("p",{className:"text-xs text-emerald-300 mb-1",children:[(0,t.jsx)("span",{className:"font-semibold",children:"AFTER"}),":",e.slice(10)]},s):""===e.trim()?(0,t.jsx)("div",{className:"h-1"},s):(0,t.jsx)("p",{className:"text-xs text-gray-400 leading-relaxed",children:e},s))})})]},s.id))}),(0,t.jsx)("p",{className:"text-center text-gray-700 text-xs mt-8",children:"실제 드래프트는 로그인 후 은새월드 → 드래프트에서 확인할 수 있습니다."})]}),n&&(0,t.jsxs)(a.HelpModal,{title:"📝 개발 드래프트 — 구현 방식",onClose:()=>o(!1),children:[(0,t.jsx)(a.HelpSection,{label:"자동 생성 파이프라인",items:["① GitHub push → dev-log.yml 워크플로우 트리거","② 2분 대기 (Docker 빌드·Render 배포 안정화)","③ Spring Boot POST /api/dev-logs/webhook 호출","   X-Webhook-Secret 헤더로 인증 (서버간 시크릿, JWT 아님)","④ 커밋 목록을 Claude Haiku 4.5에 전달 → 한국어 개발일지 요약 생성","⑤ dev_logs 테이블(PostgreSQL)에 저장 + Slack #dev 알림 전송"]}),(0,t.jsx)(a.HelpSection,{label:"편집 기능",items:["Toast UI Editor: 마크다운 WYSIWYG 에디터로 AI 요약 직접 수정","PUT /api/dev-logs/{id}: 수정된 내용으로 DB 덮어쓰기","Slack Bot: 수정 완료 시 #dev 채널에 알림","PDF 출력: window.print() + @media print CSS로 PDF 저장"]}),(0,t.jsx)(a.HelpSection,{label:"보안 & 접근",items:["웹훅: X-Webhook-Secret으로 자체 인증 (Spring Security 우회 허용)","열람: 가족 JWT 로그인 필요 — 공개 블로그와 별개","수정: JWT 인증 + 서버에서 권한 검증"]})]})]})}])}]);