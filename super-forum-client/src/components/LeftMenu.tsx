import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
//* 3.1 App.tsx 에 import 각 컴포넌트 임포트
const LeftMenu = () => {
 //* 4.4  반응형 훅 사용

 const {width} = useWindowDimensions();
  if (width <= 768) {
    return null;
  }

    return <div className="leftmenu">Left menu</div>
};

export default LeftMenu;

 //* 4.5 src/store 폴더 만들고 리덕스 파일 추가(appState.ts, configureStore.ts) 