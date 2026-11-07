"use strict";
/* Everything on this page is sample data for the project page. No app code lives here. */
const STR = {
  en: {},
  hi: {
    skip: "सामग्री पर जाएँ", navAsk: "पूछें", navExam: "मॉक टेस्ट", navTopics: "पिछले पेपर", navBuilt: "यह कैसे काम करता है", open: "ऐप खोलें",
    eyebrow: "भारत की प्रतियोगी परीक्षाओं के लिए", h1: "आधिकारिक स्रोतों से पढ़ें, हिंदी या अंग्रेज़ी में।",
    lead: "PrepPilot पिछले पेपर, नोट्स, मॉक टेस्ट और स्टडी प्लान को एक शांत जगह पर लाता है। कोई डाउट पूछें और जवाब वह पेज दिखाता है जहाँ से वह आया है। अगर नोट्स में नहीं है, तो अंदाज़ा लगाने के बजाय साफ़ बता देता है।",
    cta: "PrepPilot लाइव आज़माएँ", cta2: "देखें यह कैसे काम करता है", wake: "यह मुफ़्त सर्वर पर चलता है, इसलिए पहली बार खुलने में एक मिनट तक लग सकता है।",
    s1: "आधिकारिक GATE CS और DA पेपर, 2019–2026", s2: "विषयवार नोट्स बुक, हर एक 30+ पेज", s3: "आधिकारिक प्रश्न, हर एक का हल समझाया गया", s4: "भाषाएँ, हिंदी और अंग्रेज़ी", ripple: "पेज पर कहीं भी क्लिक करें। गणित में लहर उठेगी।",
    askEye: "पूछें", askH: "ऐसे जवाब जिन्हें आप जाँच सकें", askP: "ट्यूटर सिर्फ़ आपके नोट्स, साझा लाइब्रेरी और आधिकारिक पेपरों से जवाब देता है। कोई प्रश्न चुनें और देखें क्या होता है, फिर स्रोत पर टैप करें।", askNote: "ये सहेजे गए नमूना जवाब हैं। लाइव ऐप इन्हें उसी समय लिखता है।",
    exEye: "मॉक टेस्ट", exH: "असली परीक्षा जैसी स्क्रीन पर अभ्यास करें", exP: "टाइमर, प्रश्न पैलेट, मार्क फ़ॉर रिव्यू और निगेटिव मार्किंग, ठीक कंप्यूटर आधारित परीक्षा की तरह। यह छोटा टेस्ट आज़माएँ।",
    review: "रिव्यू के लिए चिह्नित करें", clear: "हटाएँ", next: "सेव करें और आगे", palette: "प्रश्न पैलेट", lgA: "उत्तर दिया", lgR: "रिव्यू के लिए", lgN: "उत्तर नहीं दिया", submit: "टेस्ट जमा करें", exNote: "ये प्रश्न इस पेज के लिए लिखे गए नमूने हैं। ऐप में पूरे आधिकारिक पेपर हैं।",
    tpEye: "पिछले पेपर", tpH: "देखें कि असली अंक कहाँ हैं", tpP: "PrepPilot पिछले पेपर के हर प्रश्न को टॉपिक से जोड़ता है, ताकि आप तय कर सकें कि पहले क्या पढ़ना है। यह चार्ट 2019 से 2026 तक के GATE CS के 12 पेपरों के असली आँकड़ों से बना है।", tpNote: "प्रति पेपर 100 में से अंक। जिन वर्षों में दो सत्र थे, उनमें दोनों पेपरों का औसत लिया गया है।",
    ftEye: "सब कुछ एक जगह", ftH: "पूरी तैयारी के लिए बना", capAsk: "पूछें, जवाब किस नोट से आया यह दिखाते हुए", capPr: "अभ्यास: पेपर, मॉक, क्विज़, गलतियाँ और फ़्लैशकार्ड",
    bEye: "यह कैसे काम करता है", bH: "पेज के पीछे क्या होता है", bP: "किसी हिस्से पर टैप करें और देखें वह क्या करता है।",
    endH: "आज़माने के लिए तैयार हैं?", endP: "Google से साइन इन करें, अपनी परीक्षा चुनें और शुरू करें।",
    f1: "इस रिपॉज़िटरी में सिर्फ़ प्रोजेक्ट पेज है। ऐप का कोड निजी है।", f2: "NTA, IIT या किसी परीक्षा संस्था से संबद्ध नहीं। आधिकारिक पेपर उनके प्रकाशकों के हैं। AI गलती कर सकता है, इसलिए दिया गया पेज जाँच लें।", f3: "सर्वाधिकार सुरक्षित।",
    altAsk: "PrepPilot में डेडलॉक पर जवाब और उसका स्रोत", altPr: "PrepPilot का अभ्यास पेज",
  },
};
const EN_ALT = { altAsk: "PrepPilot answering a deadlock question with its source", altPr: "The PrepPilot Practice page" };

const ASK = [
  { q: { en: "What are the four conditions for deadlock?", hi: "डेडलॉक की चार शर्तें क्या हैं?" },
    a: { en: "A deadlock needs all four of these at once:\n1. Mutual exclusion\n2. Hold and wait\n3. No preemption\n4. Circular wait",
         hi: "डेडलॉक के लिए ये चारों एक साथ ज़रूरी हैं:\n1. म्यूचुअल एक्सक्लूज़न\n2. होल्ड एंड वेट\n3. नो प्रीएम्प्शन\n4. सर्कुलर वेट" },
    src: { en: ["Deadlock", "PrepPilot library, Operating Systems"], hi: ["Deadlock", "PrepPilot लाइब्रेरी, ऑपरेटिंग सिस्टम"] } },
  { q: { en: "How is a B+ tree different from a B tree?", hi: "B+ ट्री, B ट्री से कैसे अलग है?" },
    a: { en: "A B tree can keep records in every node. A B+ tree keeps them only in the leaves and links the leaves together, which makes range queries faster.",
         hi: "B ट्री हर नोड में रिकॉर्ड रख सकता है। B+ ट्री उन्हें सिर्फ़ लीफ़ में रखता है और लीफ़ को आपस में जोड़ता है, जिससे रेंज क्वेरी तेज़ होती है।" },
    src: { en: ["File organization, indexing (B and B+ trees)", "PrepPilot library, Databases"], hi: ["File organization, indexing (B and B+ trees)", "PrepPilot लाइब्रेरी, डेटाबेस"] } },
  { q: { en: "Give me a recipe for paneer butter masala", hi: "पनीर बटर मसाला की रेसिपी बताइए" },
    a: { en: "This is not in your notes. Upload notes for this topic or rephrase the question.",
         hi: "यह आपके नोट्स में नहीं है। इस विषय के नोट्स अपलोड करें या प्रश्न दोबारा लिखें।" }, src: null },
];

const QS = [
  { m: 1, a: 1, q: { en: "Binary search on n sorted items needs how many comparisons in the worst case?", hi: "n क्रमबद्ध वस्तुओं पर बाइनरी सर्च में सबसे खराब स्थिति में कितनी तुलनाएँ लगती हैं?" },
    o: ["O(1)", "O(log n)", "O(n)", "O(n log n)"] },
  { m: 2, a: 3, q: { en: "1, 2, 3 are pushed onto a stack in that order, with pops allowed at any time. Which output is impossible?", hi: "1, 2, 3 इसी क्रम में स्टैक में पुश किए गए और कभी भी पॉप किया जा सकता है। कौन सा आउटपुट असंभव है?" },
    o: ["1 2 3", "3 2 1", "2 3 1", "3 1 2"] },
  { m: 2, a: 2, q: { en: "With 32-bit virtual addresses and 4 KB pages, how many entries does a single-level page table have?", hi: "32-बिट वर्चुअल पते और 4 KB पेज के साथ, एक-स्तरीय पेज टेबल में कितनी एंट्री होंगी?" },
    o: ["2^12", "2^16", "2^20", "2^32"] },
];

const SUBJ = {
  ga: ["General Aptitude", "सामान्य अभियोग्यता"], em: ["Engineering Maths", "अभियांत्रिकी गणित"], pds: ["Programming, Data Structures", "प्रोग्रामिंग, डेटा संरचना"],
  os: ["Operating Systems", "ऑपरेटिंग सिस्टम"], algo: ["Algorithms", "एल्गोरिदम"], cn: ["Computer Networks", "कंप्यूटर नेटवर्क"], coa: ["Computer Organization", "कंप्यूटर संगठन"],
  toc: ["Theory of Computation", "संगणना का सिद्धांत"], dbms: ["Databases", "डेटाबेस"], digital: ["Digital Logic", "डिजिटल लॉजिक"], compiler: ["Compiler Design", "कंपाइलर डिज़ाइन"],
};
const YEARS = ["2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"];
const PAPERS = { 2019: 1, 2020: 1, 2021: 2, 2022: 1, 2023: 1, 2024: 2, 2025: 2, 2026: 2 };
const MARKS = {
  ga: [15, 15, 15, 15, 15, 15, 15, 15], em: [17, 13, 15, 21, 16, 13.5, 13.5, 13], pds: [12, 12, 6.5, 9, 9, 9, 9.5, 10.5], os: [10, 10, 6.5, 10, 9, 10, 7.5, 8.5],
  algo: [6, 8, 11.5, 4, 6, 6.5, 9.5, 10], cn: [7, 6, 8, 10, 8, 9, 6, 8.5], coa: [4, 9, 5.5, 7, 8, 8, 9, 9], toc: [8, 9, 8.5, 8, 8, 7, 7.5, 6],
  dbms: [8, 8, 8, 7, 5, 8, 8.5, 6], digital: [7, 6, 7.5, 5, 8, 6, 8, 7.5], compiler: [6, 4, 8, 4, 8, 8, 6, 6],
};

const FEATURES = [
  ["Ask with sources", "Doubts answered from notes and official papers, with the page shown.", "स्रोत के साथ पूछें", "नोट्स और आधिकारिक पेपरों से जवाब, पेज के साथ।"],
  ["Notes library", "Notes for each subject and topic, ready to read.", "नोट्स लाइब्रेरी", "हर विषय और टॉपिक के नोट्स, पढ़ने के लिए तैयार।"],
  ["Past papers", "Official papers as timed tests, with topic analysis.", "पिछले पेपर", "आधिकारिक पेपर समयबद्ध टेस्ट के रूप में, टॉपिक विश्लेषण के साथ।"],
  ["Study planner", "A day-by-day plan up to your exam date.", "स्टडी प्लानर", "परीक्षा की तारीख तक रोज़ का प्लान।"],
  ["Mistake log", "Every wrong answer saved, with a quick re-test.", "गलतियों की सूची", "हर गलत उत्तर सहेजा जाता है, तुरंत दोबारा टेस्ट के साथ।"],
  ["Flashcards and sheets", "Spaced revision and formula sheets from the notes.", "फ़्लैशकार्ड और शीट", "नोट्स से दोहराव और फ़ॉर्मूला शीट।"],
];

const FLOW = [
  ["You", "Phone or laptop", "आप", "फ़ोन या लैपटॉप", "PrepPilot is mobile-first and works in Hindi and English. It installs like an app and has a low-data mode for slow connections.", "PrepPilot मोबाइल के लिए बना है और हिंदी व अंग्रेज़ी में चलता है। यह ऐप की तरह इंस्टॉल होता है और धीमे नेट के लिए लो-डेटा मोड देता है।"],
  ["Website", "Next.js on Netlify", "वेबसाइट", "Netlify पर Next.js", "Shows every screen: Today, Study, Ask, Practice and Progress. Public pages such as exam guides load without signing in.", "हर स्क्रीन यहीं दिखती है: Today, Study, Ask, Practice और Progress। परीक्षा गाइड जैसे सार्वजनिक पेज बिना साइन इन के खुलते हैं।"],
  ["API", "FastAPI on Render", "API", "Render पर FastAPI", "The brain of the app. It checks who you are, runs tests and plans, reads uploaded PDFs and finds the right pages for a question.", "ऐप का दिमाग। यह पहचान जाँचता है, टेस्ट और प्लान चलाता है, अपलोड किए PDF पढ़ता है और प्रश्न के लिए सही पेज ढूँढता है।"],
  ["Search", "Meaning-based", "खोज", "अर्थ के आधार पर", "A small language model turns notes into numbers so the app can search by meaning, not exact words. If nothing matches well, the tutor refuses to guess.", "एक छोटा भाषा मॉडल नोट्स को संख्याओं में बदलता है ताकि ऐप शब्दों के बजाय अर्थ से खोज सके। अगर कुछ ठीक से नहीं मिलता, तो ट्यूटर अंदाज़ा नहीं लगाता।"],
  ["Data and AI", "Supabase, Groq, Gemini", "डेटा और AI", "Supabase, Groq, Gemini", "Supabase keeps accounts, papers, notes and progress, and each student's data stays private to them. Groq and Gemini write the answer using only the pages that were found.", "Supabase खाते, पेपर, नोट्स और प्रगति रखता है, और हर छात्र का डेटा उसी तक निजी रहता है। Groq और Gemini सिर्फ़ मिले हुए पेजों से जवाब लिखते हैं।"],
];

const store = { get(k) { try { return localStorage.getItem(k); } catch { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch { /* optional */ } } };
const $ = (id) => document.getElementById(id);
let lang = store.get("pp-lang") === "hi" ? "hi" : "en";
const hi = () => lang === "hi";
const tx = (en, hindi) => (hi() ? hindi : en);

document.querySelectorAll("[data-t]").forEach((el) => { STR.en[el.dataset.t] = el.textContent; });

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-t]").forEach((el) => { el.textContent = STR[lang][el.dataset.t] || STR.en[el.dataset.t]; });
  document.querySelectorAll("[data-alt]").forEach((el) => { el.alt = hi() ? STR.hi[el.dataset.alt] : EN_ALT[el.dataset.alt]; });
  $("lang").textContent = hi() ? "English" : "हिंदी";
  renderAsk(); renderQ(); renderYears(); renderBars(); renderFeatures(); renderFlow();
}

/* Ask demo */
let askI = 0, typing = 0;
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
function renderAsk() {
  const box = $("askChips");
  box.replaceChildren(...ASK.map((a, i) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "chip"; b.textContent = a.q[lang]; b.setAttribute("aria-pressed", String(i === askI));
    b.onclick = () => { askI = i; renderAsk(); };
    return b;
  }));
  const item = ASK[askI], ans = $("askA"), src = $("askSrc");
  $("askQ").textContent = item.q[lang];
  src.replaceChildren(); ans.textContent = ""; ans.classList.toggle("refused", !item.src);
  clearInterval(typing);
  const text = item.a[lang], chars = Array.from(text);
  const finish = () => {
    ans.textContent = text;
    if (!item.src) return;
    const c = document.createElement("button");
    c.type = "button"; c.className = "cite"; c.textContent = "1";
    c.setAttribute("aria-label", tx("Show source 1", "स्रोत 1 दिखाएँ"));
    c.onclick = () => {
      if (src.firstChild) { src.replaceChildren(); return; }
      const card = document.createElement("div"), s = document.createElement("strong"), n = document.createElement("span");
      card.className = "source"; s.textContent = item.src[lang][0]; n.textContent = item.src[lang][1];
      card.append(s, n); src.append(card);
    };
    ans.append(" ", c);
    if (askI === 0) c.click();
  };
  if (still) return finish();
  let n = 0;
  typing = setInterval(() => {
    n += 3; ans.textContent = chars.slice(0, n).join("");
    if (n >= chars.length) { clearInterval(typing); finish(); }
  }, 22);
}

/* Mini exam */
const st = { i: 0, ans: [null, null, null], rev: [false, false, false], done: false, left: 300 };
function renderQ() {
  const q = QS[st.i];
  $("qNo").textContent = `${tx("Question", "प्रश्न")} ${st.i + 1}`;
  $("qMark").textContent = `${q.m} ${q.m === 1 ? tx("mark", "अंक") : tx("marks", "अंक")}, ${tx("minus", "ऋण")} ${q.m}/3`;
  $("qText").textContent = q.q[lang];
  $("qReview").setAttribute("aria-pressed", String(st.rev[st.i]));
  $("qOpts").replaceChildren(...q.o.map((o, i) => {
    const b = document.createElement("button"), l = document.createElement("i");
    b.type = "button"; b.className = "opt"; b.setAttribute("role", "radio"); b.setAttribute("aria-checked", String(st.ans[st.i] === i));
    l.textContent = "ABCD"[i]; b.append(l, o);
    if (st.done) { b.disabled = true; if (i === q.a) b.classList.add("right"); else if (st.ans[st.i] === i) b.classList.add("wrong"); }
    b.onclick = () => { st.ans[st.i] = i; renderQ(); };
    return b;
  }));
  $("palette").replaceChildren(...QS.map((_, i) => {
    const b = document.createElement("button");
    b.type = "button"; b.textContent = i + 1;
    b.className = st.rev[i] ? "rev" : st.ans[i] !== null ? "ans" : "";
    b.setAttribute("aria-current", String(i === st.i));
    b.setAttribute("aria-label", `${tx("Question", "प्रश्न")} ${i + 1}`);
    b.onclick = () => { st.i = i; renderQ(); };
    return b;
  }));
  ["qReview", "qClear"].forEach((id) => { $(id).disabled = st.done; });
  renderScore();
}
function renderScore() {
  const el = $("score");
  el.replaceChildren();
  if (!st.done) return;
  let sum = 0;
  QS.forEach((q, i) => { if (st.ans[i] === q.a) sum += q.m; else if (st.ans[i] !== null) sum -= q.m / 3; });
  const s = document.createElement("strong");
  s.textContent = `${Math.round(sum * 100) / 100} / 5`;
  el.append(s, tx("Tap a question to see the right answer.", "सही उत्तर देखने के लिए प्रश्न पर टैप करें।"));
}
$("qNext").onclick = () => { st.i = (st.i + 1) % QS.length; renderQ(); };
$("qClear").onclick = () => { st.ans[st.i] = null; renderQ(); };
$("qReview").onclick = () => { st.rev[st.i] = !st.rev[st.i]; renderQ(); };
function submit() {
  st.done = true; st.rev = [false, false, false];
  $("qSubmit").disabled = false;
  renderQ();
}
$("qSubmit").onclick = () => {
  if (st.done) { Object.assign(st, { i: 0, ans: [null, null, null], done: false, left: 300 }); $("qSubmit").textContent = STR[lang].submit || STR.en.submit; renderQ(); return; }
  submit(); $("qSubmit").textContent = tx("Try again", "फिर से करें");
};
setInterval(() => {
  if (st.done || document.hidden) return;
  st.left = Math.max(0, st.left - 1);
  $("timer").textContent = `${String(st.left / 60 | 0).padStart(2, "0")}:${String(st.left % 60).padStart(2, "0")}`;
  if (!st.left) submit();
}, 1000);

/* Marks chart: real numbers, 780 questions across 12 papers */
let year = "all";
function valueOf(key) {
  if (year !== "all") return MARKS[key][YEARS.indexOf(year)];
  let sum = 0, n = 0;
  YEARS.forEach((y, i) => { sum += MARKS[key][i] * PAPERS[y]; n += PAPERS[y]; });
  return Math.round((sum / n) * 10) / 10;
}
function renderYears() {
  $("years").replaceChildren(...["all", ...YEARS].map((y) => {
    const b = document.createElement("button");
    b.type = "button"; b.textContent = y === "all" ? tx("All 12 papers", "सभी 12 पेपर") : y; b.setAttribute("aria-pressed", String(y === year));
    b.onclick = () => { year = y; renderYears(); renderBars(); };
    return b;
  }));
}
function renderBars() {
  const box = $("bars"), rows = Object.keys(MARKS).map((k) => [k, valueOf(k)]).sort((a, b) => b[1] - a[1]);
  box.replaceChildren(...rows.map(([k, v]) => {
    const row = document.createElement("div"), l = document.createElement("div"), t = document.createElement("div"), f = document.createElement("div"), n = document.createElement("div");
    row.className = "bar"; l.className = "bar-l"; t.className = "bar-t"; f.className = "bar-f"; n.className = "bar-v";
    l.textContent = SUBJ[k][hi() ? 1 : 0]; n.textContent = v; t.append(f); row.append(l, t, n);
    return row;
  }));
  void box.offsetWidth; // the bars start at zero, then grow
  box.querySelectorAll(".bar-f").forEach((f, i) => { f.style.width = `${(rows[i][1] / 21) * 100}%`; });
}

function renderFeatures() {
  $("features").replaceChildren(...FEATURES.map((f) => {
    const c = document.createElement("div"), h = document.createElement("h3"), p = document.createElement("p");
    c.className = "card"; h.textContent = hi() ? f[2] : f[0]; p.textContent = hi() ? f[3] : f[1]; c.append(h, p);
    return c;
  }));
}

let flowI = 2;
function renderFlow() {
  $("flow").replaceChildren(...FLOW.map((f, i) => {
    const b = document.createElement("button"), s = document.createElement("strong"), n = document.createElement("span");
    b.type = "button"; b.className = "node"; b.setAttribute("role", "tab"); b.setAttribute("aria-selected", String(i === flowI));
    s.textContent = hi() ? f[2] : f[0]; n.textContent = hi() ? f[3] : f[1]; b.append(s, n);
    b.onclick = () => { flowI = i; renderFlow(); };
    return b;
  }));
  const f = FLOW[flowI], h = document.createElement("h3"), p = document.createElement("p");
  h.textContent = hi() ? f[2] : f[0]; p.textContent = hi() ? f[5] : f[4];
  $("flowDetail").replaceChildren(h, p);
}

/* Theme */
const root = document.documentElement;
const saved = store.get("pp-theme");
root.dataset.theme = saved || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
$("theme").onclick = () => { root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark"; store.set("pp-theme", root.dataset.theme); field.colors(); };
$("lang").onclick = () => { lang = hi() ? "en" : "hi"; store.set("pp-lang", lang); applyLang(); };

/* The app's glyph background: maths and Devanagari that drift, and ripple on click */
const field = (() => {
  const GLYPHS = Array.from("0123456789+−×÷=≈≠<>≤≥∑∫√π∞∂Δθλμσφ∴%()[]{}^·०१२३४५६७८९कखगअइ");
  const cv = $("glyphs"), ctx = cv.getContext("2d");
  const atlas = document.createElement("canvas"), actx = atlas.getContext("2d");
  const ripples = [], SPEED = 0.42, LIFE = 2600, WIDTH = 46, t0 = performance.now();
  let w, h, cell, cols, rows, tile, chars, seeds, rgb, acc, alpha, last = 0, frameMs = 33, cost = 0, raf = 0;
  const readColors = () => { const s = getComputedStyle(root); rgb = s.getPropertyValue("--glyph").trim(); acc = s.getPropertyValue("--glyph-accent").trim(); alpha = parseFloat(s.getPropertyValue("--glyph-alpha")); };
  function buildAtlas(dpr) {
    tile = Math.ceil(cell * dpr);
    atlas.width = tile * GLYPHS.length; atlas.height = tile * 2;
    actx.font = `${Math.round(cell * 0.5 * dpr)}px ui-monospace, Consolas, "Noto Sans Devanagari", monospace`;
    actx.textAlign = "center"; actx.textBaseline = "middle";
    for (let r = 0; r < 2; r++) { actx.fillStyle = `rgb(${r ? acc : rgb})`; GLYPHS.forEach((g, i) => actx.fillText(g, i * tile + tile / 2, r * tile + tile / 2)); }
  }
  function layout() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight; cell = w < 480 ? 28 : w < 1024 ? 26 : 24;
    while (Math.ceil(w / cell) * Math.ceil(h / cell) > 1700) cell += 2;
    cols = Math.ceil(w / cell) + 1; rows = Math.ceil(h / cell) + 1;
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildAtlas(dpr);
    const n = cols * rows;
    chars = Uint8Array.from({ length: n }, () => Math.random() * GLYPHS.length);
    seeds = Float32Array.from({ length: n }, () => Math.random() * Math.PI * 2);
  }
  function draw(now) {
    const t = (now - t0) / 1000;
    ctx.globalAlpha = 1; ctx.clearRect(0, 0, w, h);
    for (let i = ripples.length - 1; i >= 0; i--) if (now - ripples[i].t > LIFE) ripples.splice(i, 1);
    for (let k = 0; k < 3; k++) chars[Math.random() * chars.length | 0] = Math.random() * GLYPHS.length;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const i = r * cols + c, gx = c * cell + cell / 2, gy = r * cell + cell / 2, s = seeds[i];
      let x = gx + Math.sin(gy * 0.012 + t * 0.35 + s * 0.15) * 4 + Math.sin(t * 0.18 + s) * 1.2;
      let y = gy + Math.cos(gx * 0.011 + t * 0.27) * 3.5;
      const a = alpha * (0.55 + (Math.sin(gx * 0.008 + gy * 0.006 - t * 0.6) * 0.5 + 0.5) * 0.9);
      let boost = 0;
      for (const p of ripples) {
        const age = now - p.t, dx = gx - p.x, dy = gy - p.y, d = Math.hypot(dx, dy) || 1, off = (d - age * SPEED) / WIDTH;
        if (off < -2.5 || off > 2.5) continue;
        const fade = 1 - age / LIFE, kk = Math.exp(-off * off) * fade * fade;
        x += (dx / d) * kk * 9; y += (dy / d) * kk * 9; boost = Math.max(boost, kk);
      }
      const on = boost > 0.02;
      ctx.globalAlpha = on ? Math.min(0.55, a + boost * 0.42) : a;
      ctx.drawImage(atlas, chars[i] * tile, on ? tile : 0, tile, tile, x - cell / 2, y - cell / 2, cell, cell);
    }
  }
  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (document.hidden || now - last < frameMs) return;
    last = now;
    const a = performance.now(); draw(now);
    cost = cost * 0.9 + (performance.now() - a) * 0.1;
    frameMs = cost > 10 ? 83 : cost > 5 ? 50 : 33;
  }
  function start() {
    readColors(); layout(); draw(performance.now()); cv.classList.add("on");
    if (still) return;
    raf = requestAnimationFrame(frame);
    addEventListener("pointerdown", (e) => { ripples.push({ x: e.clientX, y: e.clientY, t: performance.now() }); if (ripples.length > 5) ripples.shift(); }, { passive: true });
  }
  let timer = 0;
  addEventListener("resize", () => { clearTimeout(timer); timer = setTimeout(() => { layout(); draw(performance.now()); }, 150); }, { passive: true });
  if (document.readyState === "complete") setTimeout(start, 300); else addEventListener("load", () => setTimeout(start, 300), { once: true });
  return { colors() { readColors(); buildAtlas(Math.min(devicePixelRatio || 1, 2)); } };
})();

applyLang();
