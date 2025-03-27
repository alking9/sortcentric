# SortCentric
# SortCentric

![Vercel](https://img.shields.io/badge/Live-Vercel-black?logo=vercel)
![React](https://img.shields.io/badge/Framework-React-blue?logo=react)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?logo=typescript)
![License](https://img.shields.io/github/license/alking9/sortcentric)



**SortCentric** is a responsive, interactive sorting algorithm visualizer built with React and TypeScript. It highlights each step of the sorting process in real-time, allowing users to observe and compare the inner workings of algorithms like Bubble Sort, Merge Sort, and Quick Sort.

This project was built as a way to sharpen my front-end skills, apply fundamental algorithms in a visual context, and demonstrate clean architecture with full modularity. It's lightweight, intuitive, and something I'm proud of sharing.

---

## Live Demo

Check it out here: [https://sortcentric.vercel.app](https://sortcentric.vercel.app)

---

## What It Does

SortCentric lets you:
- Select a sorting algorithm from a dropdown menu
- Generate a randomized array
- Start, stop, and resume the sorting animation
- Watch comparisons, swaps, and merges happen step by step
- See time complexity details for each algorithm

All animations are powered by custom-built sorting logic using a `SortStep` type structure to track each operation accurately.

---

## Algorithms Implemented

| Algorithm   | Time Complexity |
|-------------|-----------------|
| Bubble Sort | O(n²)           |
| Merge Sort  | O(n log n)      |
| Quick Sort  | O(n log n)      |

Each one was implemented from scratch and animated frame-by-frame with precise tracking of active indices and array states.

---

## Technologies

- React + TypeScript
- Vite
- CSS-in-JS for modular styling
- Deployed via Vercel

---
## Running Locally
```bash
git clone https://github.com/alking9/sortcentric.git
cd sortcentric