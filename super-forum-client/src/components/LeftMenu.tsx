import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { getCategories } from "../services/DataService"
import Category from "../models/Category";

const LeftMenu = () => {
  // 윈도우 창의 너비를 가져옵니다.
  const { width } = useWindowDimensions();
  
  // 카테고리 목록을 저장할 상태입니다.
  const [categories, setCategories] = useState<JSX.Element>(
    <div>Left Menu</div>
  );

  // 컴포넌트가 마운트되면 카테고리 데이터를 가져와 상태를 업데이트합니다.
  useEffect(() => {
    getCategories()
      .then((categories: Array<Category>) => {
        const cats = categories.map((cat) => {
          return <li key={cat.id}>{cat.name}</li>; // 각 카테고리를 목록 아이템으로 변환합니다.
        });
        setCategories(<ul className="category">{cats}</ul>); // 변환된 카테고리를 상태에 저장합니다.
      })
      .catch((err) => {
        console.log(err); // 오류 발생 시 콘솔에 로그를 출력합니다.
      });
  }, []);

  // 윈도우 너비가 768px 이하인 경우 아무것도 반환하지 않습니다.
  if (width <= 768) {
    return null;
  }
  
  // 카테고리 목록을 포함한 왼쪽 메뉴를 렌더링합니다.
  return <div className="leftmenu">{categories}</div>;
};

export default LeftMenu;
//* 5.5 LeftMenu.css 파일 만들기