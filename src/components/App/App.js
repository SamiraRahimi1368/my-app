'use client'
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import HomePage from "../HomePage/HomePage";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./App.css";
import Blog from "../Blog/Blog";
import ThemeContext from "../../contexts/ThemeContext";
import themeConfig from "../../configs/theme";

function App() {
  const [activeTheme, setActiveTheme] = useState("white");

  return (
    <ThemeContext.Provider value={{ setActiveTheme }}>
      <div className={`App ${activeTheme}`}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default App;
