import React from "react";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main className="main">
        <p>15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
