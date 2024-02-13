import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context.js";
import Home from "./Pages/Home/Home.js";
import About from "./Pages/About/About.js";
import BookList from "./Components/BookList/BookList.js";
import BookDetails from "./Components/BookDetails/BookDetails.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="book" element={<BookList />} />
        <Route path="book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
