// 'redux' 라이브러리에서 'createStore' 함수를 가져옵니다.
import { createStore } from "redux";

// 현재 디렉터리의 'AppState' 파일에서 'rootReducer'를 가져옵니다.
import { rootReducer } from "./AppState";

// 스토어를 구성하고 반환하는 함수를 정의합니다.
const configureStore = () => {
  // 'createStore' 함수를 사용하여 리듀서와 초기 상태로 스토어를 생성합니다.
  // 'rootReducer'는 애플리케이션의 상태를 관리하는 주요 리듀서입니다.
  // 두 번째 매개변수는 초기 상태로, 여기서는 빈 객체로 설정되었습니다.
  return createStore(rootReducer, {});
};

// 'configureStore' 함수를 외부에서 사용할 수 있도록 내보냅니다.
export default configureStore;
