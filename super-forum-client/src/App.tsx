import React, { useEffect } from "react";
import "./App.css";


function App() {
  return (
    //* 2.2 앱 레이아웃 구조 설정
    <div className="App">
    <nav className="navigation">Nav</nav>
    <div className="sidebar">Sidebar</div>
    <div className="leftmenu">Left menu</div>
    <main className="content">Main</main>
    <div className="rightmenu">Right Menu</div>
    </div>
  );
}

export default App;
//* 2.3 App.css 파일 이동