//* 4.2 React에서 화면 크기 변화 감지하기: 커스텀 훅을 사용한 반응형 디자인

import { useState, useEffect } from "react";

// 화면의 너비와 높이 정보를 담는 인터페이스
export interface WindowDimension {
  height: number;
  width: number;
}

// 현재 창의 크기를 반환하는 커스텀 훅
export const useWindowDimensions = (): WindowDimension => {
  // 창의 높이와 너비 상태를 저장하는 state
  const [dimension, setDimension] = useState<WindowDimension>({
    height: 0,
    width: 0,
  });

  // 창의 크기가 변경될 때 호출될 핸들러 함수
  const handleResize = () => {
    setDimension({
      height: window.innerHeight, // 현재 창의 내부 높이
      width: window.innerWidth,  // 현재 창의 내부 너비
    });
  };

  // 컴포넌트가 마운트되거나 창의 크기가 변경될 때 handleResize 호출
  useEffect(() => {
    window.addEventListener("resize", handleResize); // 리사이즈 이벤트에 핸들러 추가
    handleResize(); // 초기 창 크기 설정

    return () => {
      window.removeEventListener("resize", handleResize); // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    };
  }, []);

  return dimension; // 현재 창의 크기를 반환
};


//* 4.3 각 컴포넌트에 수정(참조 LeftMenu.tsx)