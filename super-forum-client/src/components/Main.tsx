import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
const Main = () => {

const test = true;

//*5.4 의도적으로 오류 발생 시킴 에러경계 수정 후 테스트 진행
if (test) throw new Error("Main fail");
else{
  return <main className="content">Main</main>
}
   
};

export default Main;