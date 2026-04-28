(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,62319,e=>{"use strict";var t=e.i(43476),r=e.i(22016),a=e.i(18566),o=e.i(71645),l=e.i(54858);let s=[{href:"/blog",label:"블로그"},{href:"/portfolio",label:"포트폴리오"},{href:"/demo",label:"기능 데모"}];e.s(["default",0,function(){let e=(0,a.useRouter)(),i=(0,a.usePathname)(),[n,d]=(0,o.useState)(""),[c,g]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=(0,l.getToken)();if(!e)return;g(!0);let t=(0,l.parseJwt)(e);t?.sub&&d((0,l.getDisplayName)(t.sub))},[]),(0,t.jsx)("nav",{className:"fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800",children:(0,t.jsxs)("div",{className:"max-w-6xl mx-auto px-6 h-16 flex items-center justify-between",children:[(0,t.jsx)("div",{className:"flex items-center gap-4 shrink-0",children:(0,t.jsxs)(r.default,{href:c?"/world/dashboard":"/home",className:"text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors whitespace-nowrap",children:["Coking",(0,t.jsx)("span",{className:"text-indigo-400",children:"Cooding"})]})}),(0,t.jsxs)("div",{className:"flex items-center gap-5",children:[(0,t.jsx)(r.default,{href:"/about",className:"text-sm font-mono text-gray-400 hover:text-indigo-400 transition-colors",children:"NAMUBAL78"}),s.map(e=>{let a;return(0,t.jsx)(r.default,{href:e.href,className:`text-sm transition-colors ${(a=e.href,i.startsWith(a))?"text-indigo-400":"text-gray-400 hover:text-white"}`,children:e.label},e.href)}),c?(0,t.jsxs)(t.Fragment,{children:[n&&(0,t.jsx)("span",{className:"text-sm text-gray-500",children:n}),(0,t.jsx)("button",{onClick:function(){localStorage.removeItem("token"),e.push("/")},className:"text-sm text-gray-600 hover:text-red-400 transition-colors cursor-pointer",children:"로그아웃"})]}):(0,t.jsx)(r.default,{href:"/login",className:"text-sm bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1.5 rounded-lg transition-colors",children:"은새월드"})]})]})})}])},17007,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(18566),o=e.i(62319),l=e.i(54858);e.s(["default",0,function(){let e=(0,a.useRouter)(),[s,i]=(0,r.useState)([]),[n,d]=(0,r.useState)(null),[c,g]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{(0,l.getToken)()?(0,l.apiFetch)("/api/dev-logs").then(e=>e.json()).then(e=>{i(e),e.length>0&&d(e[0])}).catch(()=>e.push("/login")).finally(()=>g(!1)):e.push("/login")},[e]),(0,t.jsxs)("div",{className:"min-h-screen bg-gray-950 text-white flex flex-col",children:[(0,t.jsx)(o.default,{}),(0,t.jsxs)("main",{className:"flex-1 max-w-6xl mx-auto w-full px-6 pt-28 pb-12 flex gap-6",children:[(0,t.jsxs)("aside",{className:"w-56 shrink-0",children:[(0,t.jsx)("p",{className:"text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-3",children:"Dev Draft"}),c?(0,t.jsx)("p",{className:"text-gray-600 text-sm",children:"불러오는 중..."}):0===s.length?(0,t.jsx)("p",{className:"text-gray-600 text-sm",children:"작업 기록 없음"}):(0,t.jsx)("ul",{className:"space-y-1",children:s.map(e=>(0,t.jsx)("li",{children:(0,t.jsxs)("button",{onClick:()=>d(e),className:`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${n?.id===e.id?"bg-indigo-600 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white"}`,children:[(0,t.jsx)("p",{className:"font-medium",children:e.logDate}),(0,t.jsx)("p",{className:"text-xs opacity-70 truncate",children:e.title.replace(/\d{4}-\d{2}-\d{2} /,"")})]})},e.id))})]}),(0,t.jsx)("div",{className:"flex-1 min-w-0",children:n?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mb-6 flex items-start justify-between gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-2xl font-bold",children:n.title}),(0,t.jsxs)("p",{className:"text-gray-500 text-xs mt-1",children:[new Date(n.updatedAt).toLocaleString("ko-KR")," 갱신"]})]}),(0,t.jsxs)("button",{onClick:()=>{var e;let t,r;return t=(e=n).content.replace(/```(\w*)\n([\s\S]*?)```/g,(e,t,r)=>{let a=t?`<div class="code-lang">${t}</div>`:"";return`<pre>${a}<code>${r.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`}).replace(/^### (.+)$/gm,"<h3>$1</h3>").replace(/^## (.+)$/gm,"<h2>$1</h2>").replace(/^# (.+)$/gm,"<h1>$1</h1>").replace(/^> (.+)$/gm,"<blockquote>$1</blockquote>").replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2">$1</a>').replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`(.+?)`/g,"<code>$1</code>").replace(/^---$/gm,"<hr/>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>[\s\S]*<\/li>)/g,"<ul>$1</ul>").replace(/\n/g,"<br/>"),void((r=window.open("","_blank"))&&(r.document.write(`<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"/>
<title>${e.title}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 11pt;
    line-height: 1.8;
    color: #1a1a1a;
    padding: 20mm 22mm;
    max-width: 210mm;
    margin: 0 auto;
  }
  h1 { font-size: 18pt; font-weight: 700; margin: 16pt 0 8pt; border-bottom: 2px solid #4f46e5; padding-bottom: 4pt; }
  h2 { font-size: 14pt; font-weight: 700; margin: 14pt 0 6pt; color: #3730a3; }
  h3 { font-size: 12pt; font-weight: 600; margin: 10pt 0 4pt; color: #4338ca; }
  p, br { margin-bottom: 4pt; }
  strong { font-weight: 700; }
  code {
    font-family: 'D2Coding', 'Consolas', monospace;
    font-size: 9.5pt;
    background: #f1f5f9;
    padding: 1pt 4pt;
    border-radius: 3pt;
  }
  pre {
    background: #f8fafc;
    border: 1pt solid #e2e8f0;
    border-left: 3pt solid #6366f1;
    border-radius: 4pt;
    padding: 10pt 12pt;
    margin: 8pt 0;
    overflow: visible;
    white-space: pre-wrap;
    word-break: break-all;
    page-break-inside: avoid;
  }
  pre code { background: none; padding: 0; font-size: 9pt; }
  .code-lang { font-size: 8pt; color: #6366f1; font-weight: 600; margin-bottom: 4pt; }
  blockquote {
    border-left: 3pt solid #6366f1;
    padding: 4pt 10pt;
    color: #475569;
    margin: 6pt 0;
    font-style: italic;
  }
  ul { padding-left: 16pt; margin: 4pt 0; }
  li { margin-bottom: 3pt; }
  hr { border: none; border-top: 1pt solid #e2e8f0; margin: 14pt 0; }
  a { color: #4f46e5; text-decoration: underline; }
  .header {
    text-align: center;
    margin-bottom: 20pt;
    padding-bottom: 10pt;
    border-bottom: 1.5pt solid #e2e8f0;
  }
  .header .main-title { font-size: 16pt; font-weight: 700; color: #1e1b4b; }
  .header .meta { font-size: 9pt; color: #64748b; margin-top: 4pt; }
  @media print {
    body { padding: 0; }
    a { color: #4f46e5; }
  }
</style>
</head>
<body>
<div class="header">
  <div class="main-title">${e.title}</div>
  <div class="meta">Coking-Cooding Dev Draft &nbsp;\xb7&nbsp; ${e.logDate} &nbsp;\xb7&nbsp; 갱신: ${new Date(e.updatedAt).toLocaleString("ko-KR")}</div>
</div>
${t}
<script>window.onload = () => { window.print(); }</script>
</body>
</html>`),r.document.close()))},className:"shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-400 border border-gray-700 rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-colors",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),"PDF 저장"]})]}),(0,t.jsx)("article",{className:"text-sm text-gray-300 leading-relaxed",dangerouslySetInnerHTML:{__html:n.content.replace(/```(\w*)\n([\s\S]*?)```/g,(e,t,r)=>{let a=t?`<span class="text-xs text-gray-500 mb-1 block">${t}</span>`:"";return`<pre class="bg-gray-900 border border-gray-700 rounded-lg p-4 my-3 overflow-x-auto text-xs text-indigo-200 leading-relaxed">${a}${r.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</pre>`}).replace(/^### (.+)$/gm,'<h3 class="text-sm font-bold text-indigo-200 mt-4 mb-1">$1</h3>').replace(/^## (.+)$/gm,'<h2 class="text-base font-bold text-indigo-300 mt-5 mb-1">$1</h2>').replace(/^# (.+)$/gm,'<h1 class="text-lg font-bold text-white mt-6 mb-2">$1</h1>').replace(/^> (.+)$/gm,'<blockquote class="border-l-2 border-indigo-600 pl-3 text-gray-400 text-xs my-2">$1</blockquote>').replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer" class="text-indigo-400 underline hover:text-indigo-300">$1</a>').replace(/\*\*(.+?)\*\*/g,'<strong class="text-gray-200">$1</strong>').replace(/`(.+?)`/g,'<code class="bg-gray-800 px-1 rounded text-indigo-300 text-xs">$1</code>').replace(/^---$/gm,'<hr class="border-gray-700 my-6"/>').replace(/^- (.+)$/gm,'<li class="ml-4 list-disc text-gray-400 text-sm">$1</li>').replace(/\n/g,"<br/>")}})]}):!c&&(0,t.jsx)("p",{className:"text-gray-600 text-sm",children:"날짜를 선택하세요."})})]})]})}])}]);