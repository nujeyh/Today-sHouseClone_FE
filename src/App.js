import React, { useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";

// js파일
import Main from "./pages/Main";
import PostNewEdit from "./pages/PostNewEdit";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contents/new" element={<PostNewEdit />} />
        <Route path="contents/edit">
          <Route path=":id" element={<PostNewEdit />} />
        </Route>
        <Route path="detail">
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: "Noto Sans KR", "Apple SD Gothic Neo", "맑은 고딕",
    "Malgun Gothic", sans-serif;
    color: #424242;
    margin: 0;
    padding: 0;
  }
`;

export default App;
