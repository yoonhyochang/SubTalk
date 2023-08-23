import React, { useEffect } from "react";
import "./App.css";
import LeftMenu from "./components/LeftMenu"; // 컴포넌트 추가
import Main from "./components/Main"; // 컴포넌트 추가
import Nav from "./components/Nav"; // 컴포넌트 추가
import RightMenu from "./components/RightMenu"; // 컴포넌트 추가
import SideBar from "./components/SideBar"; // 컴포넌트 추가

function App() {
  return (
    //* 3.2 앱 레이아웃 구조 변경
    <div className="App">
      <Nav />
      <Main />
      <SideBar />
      <LeftMenu />
      <RightMenu />
    </div>
  );
}

export default App;
//* 2.3 App.css 파일 이동