// 사용자 프로필을 설정하는 액션 타입 상수를 정의합니다.
export const UserProfileSetType = "USER_PROFILE_SET";

// 사용자 프로필 데이터의 형식을 정의하는 인터페이스입니다.
export interface UserProfilePayload {
  id: string; // 사용자 ID
  userName: string; // 사용자 이름
}

// 사용자 프로필 액션의 형식을 정의하는 인터페이스입니다.
export interface UserProfileAction {
  type: string; // 액션 타입
  payload: UserProfilePayload | null; // 사용자 프로필 데이터 또는 null
}

// 사용자 프로필 리듀서 함수입니다. 
// 이 함수는 사용자 프로필의 상태를 변경하는 액션을 처리합니다.
export const UserProfileReducer = (
  state: any = null, // 초기 상태는 null입니다.
  action: UserProfileAction // 처리할 액션
): UserProfilePayload | null => {
  switch (action.type) { // 액션 타입에 따라
    case UserProfileSetType: // 사용자 프로필 설정 액션의 경우
      return action.payload; // 액션의 payload를 반환합니다.
    default: // 알 수 없는 액션 타입의 경우
      return state; // 현재 상태를 그대로 반환합니다.
  }
};
