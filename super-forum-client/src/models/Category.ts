//* 5.3 타입 스크립트를 사용하고 있어서 카테고리 타입을 만들어야함 
//* 5.4 LeftMenu.tsx 파일수정

// "Category" 클래스를 정의합니다.
// 이 클래스는 카테고리를 나타내며, 각 카테고리에는 고유 ID와 이름이 있습니다.
export default class Category {
  // 생성자 함수는 카테고리의 ID와 이름을 인자로 받아 객체를 초기화합니다.
  constructor(public id: string, public name: string) {}
}
