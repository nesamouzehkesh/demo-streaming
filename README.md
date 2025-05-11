# DEMO Streaming App

This is a simple streaming web app built with **React**, **TypeScript**, and **CSS**, based on a design spec provided in the coding challenge. It displays program data (movies and series) using a JSON feed and includes loading, error handling, filtering, and responsive layout support.

> ⏱ This solution was completed in ~4 hours — my first time using TypeScript after 4 years of working primarily in JavaScript.

---

## 🔧 Tech Stack

- React + TypeScript
- Vite (for fast development/build)
- CSS (no external UI frameworks)
- Jest + React Testing Library (for testing)
- Grid + Flexbox layout
- Media queries for responsiveness

---

## 📁 Project Structure

```
src/
  ├── assets/                  # provided icons
  ├── components/              # reusable UI components (Header, Footer, etc.)
  ├── pages/                   # Home, Movies, Series
  ├── hooks/                   # custom hook for filtered API data
  ├── utils/                   # utility functions like filter-and-sort
  ├── types/                   # Program type definition
  ├── App.tsx / main.tsx       # app entry
public/
  └── sample.json              # JSON feed for programs
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

---

## 🧪 Running Tests

```bash
npm test
```

---

## 📦 Building for Production

To build the deployable version of the app:

```bash
npm run build
```

This outputs static files into the `dist/` folder with an entry point at `index.html`.

---

## 📌 Architectural Notes

- **Minimal dependencies**: This project sticks to the challenge requirements with no CSS frameworks and minimal external libraries.
- **Typed from scratch**: I tried to type the project as much as I could with the help from AI as well (without overengineering).
- **Reusable components**: Header, Footer, SectionHeading, and ProgramTile were extracted to simplify the page files.
- **Custom hook**: A single hook `useFilteredPrograms()` handles filtering, sorting, loading, and error state for both Series and Movies.

---

## 📱 Responsiveness

- The app uses **CSS Grid** and **Flexbox** for general layout, which allows content to wrap and align naturally.
- **Media queries** were added to adjust the header layout and grid structure on smaller viewports:
  - Header content stacks vertically under tablet width.
  - Program grids adjust from 4 to 2 or 1 column layouts depending on screen width.

These changes improve usability on tablets and mobile devices.

---

## 🤔 If I Had More Time...

- Extracted layout wrappers (e.g. `PageContainer`)
- Added accessibility improvements (ARIA labels, alt fallbacks)
- Applied stricter layout refinements and breakpoints and worked on styling more, I love styled componennts!
- Used a typed API response handler instead of `.json()` inline
- Refactored minor logic duplication across Home, Movies, and Series

---

## 🙏 Final Thoughts

This was a great exercise to revisit frontend fundamentals and get hands-on with TypeScript a bit and also refresh again on setting up a boiler plate. I had to sepnd some time on dealing with setting up my jest but for doing this project I used Cursor IDE for the first time and it actually was reat to use its AI chat inn resolving my issues and speedinng myself. If this were a production project, I would polish the test coverage, apply stricter lint rules, and focus more on visual accessibility.

Thanks for reviewing!
