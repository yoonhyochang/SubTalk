// Redux 라이브러리에서 combineReducers 함수를 가져옵니다.
import { combineReducers } from "redux";
// 사용자 프로필 리듀서를 가져옵니다.
import { UserProfileReducer } from "./user/Reducer";

// rootReducer를 생성합니다. 여기서는 각 리듀서를 하나의 객체로 결합합니다.
// 이 예에서는 'user' 키에 UserProfileReducer를 할당합니다.
export const rootReducer = combineReducers({
  user: UserProfileReducer,
});

// RootState 타입을 정의합니다. 이 타입은 rootReducer의 반환값의 타입과 일치합니다.
// 이를 통해 Redux 스토어의 전체 상태 타입을 얻을 수 있습니다.
export type AppState = ReturnType<typeof rootReducer>;
