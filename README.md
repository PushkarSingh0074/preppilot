<p align="center">
  <a href="https://pushkarsingh0074.github.io/preppilot/"><img src="assets/banner.svg" alt="PrepPilot: exam prep for India, in Hindi and English" width="100%"></a>
</p>

<p align="center">
  <a href="https://preppilot-henna.vercel.app"><img src="https://img.shields.io/badge/Open_the_live_app-5a62e4?style=for-the-badge" alt="Open the live app"></a>
  <a href="https://pushkarsingh0074.github.io/preppilot/"><img src="https://img.shields.io/badge/Interactive_demo-16171a?style=for-the-badge" alt="Interactive demo"></a>
</p>

<p align="center">
  Past papers, notes, mock tests and a study plan for Indian competitive exams, in one calm place.<br>
  <b>Ask a doubt and the answer shows the page it came from. If the notes don't cover it, it says so.</b>
</p>

<table align="center">
  <tr>
    <td align="center"><h2>30</h2>exams from official notifications</td>
    <td align="center"><h2>2,183</h2>syllabus topics</td>
    <td align="center"><h2>780</h2>GATE CS past-paper questions</td>
    <td align="center"><h2>2</h2>languages, Hindi and English</td>
  </tr>
</table>

## See it

<table>
  <tr>
    <td width="50%"><img src="assets/ask.png" alt="Ask, showing the note an answer came from"><p align="center"><b>Ask</b><br>Every answer links to its source</p></td>
    <td width="50%"><img src="assets/topics.png" alt="Important topics ranked by marks"><p align="center"><b>Important topics</b><br>14 of 54 GATE CS topics carry about half the marks</p></td>
  </tr>
  <tr>
    <td width="50%"><img src="assets/today.png" alt="Today screen with countdown and next steps"><p align="center"><b>Today</b><br>Your countdown and what to do next</p></td>
    <td width="50%"><img src="assets/library.png" alt="Notes library by subject and topic"><p align="center"><b>Library</b><br>Notes by subject and topic, with progress</p></td>
  </tr>
</table>

> [!TIP]
> Try the [interactive page](https://pushkarsingh0074.github.io/preppilot/): ask a sample doubt, take a three-question mock test and explore the marks chart. Click anywhere and the background ripples, just like in the app.

## What it does

| | |
|---|---|
| **Ask with sources** | Doubts answered from notes and official papers, with the page shown |
| **Mock tests** | The real exam screen: timer, palette, mark for review, negative marking |
| **Past papers** | Official papers as timed tests, with topic analysis |
| **Important topics** | Where the marks really are, so you know what to study first |
| **Notes library** | Notes by subject and topic, ready to read |
| **Study planner** | A day-by-day plan up to your exam date |
| **Revision** | Mistake log, flashcards and formula sheets |
| **Your own uploads** | Add PDFs or photos and ask questions from them |
| **Hindi and English** | Switch language at any time |

## How an answer is made

```mermaid
flowchart LR
  Q([Your doubt]) --> S[Search notes<br/>by meaning]
  S --> C{Strong<br/>match?}
  C -- Yes --> A[Answer from<br/>those pages only]
  A --> R([Answer with<br/>its source])
  C -- No --> N([Says it's not<br/>in your notes])
```

## Built with

<p>
  <img src="https://img.shields.io/badge/Next.js-16171a?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-16171a?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-16171a?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/FastAPI-16171a?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI">
  <img src="https://img.shields.io/badge/Python-16171a?style=flat-square&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Supabase-16171a?style=flat-square&logo=supabase&logoColor=white" alt="Supabase">
  <img src="https://img.shields.io/badge/PostgreSQL-16171a?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/ONNX-16171a?style=flat-square&logo=onnx&logoColor=white" alt="ONNX">
  <img src="https://img.shields.io/badge/Vercel-16171a?style=flat-square&logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/Render-16171a?style=flat-square&logo=render&logoColor=white" alt="Render">
</p>

## Good to know

- The app runs on a free server, so the first visit can take up to a minute to wake.
- This repository holds the project page only. The application code is private.
- PrepPilot is not affiliated with NTA, the IITs or any exam body. Official papers belong to their publishers.
- AI can make mistakes, so check the cited page.

<p align="center"><sub>© 2026 <a href="https://github.com/PushkarSingh0074">Pushkar Singh</a>. All rights reserved.</sub></p>
