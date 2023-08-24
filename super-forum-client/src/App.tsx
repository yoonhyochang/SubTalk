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

//* 4. 훅을 사용하영 기기 크기기에 맞는 랜더링 하기
//* 4.1 src/hooks폴더 만든후 useWindowDimensions.ts 파일 추가함
export default App;
//* 2.3 App.css 파일 이동