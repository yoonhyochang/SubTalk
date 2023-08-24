//*5. 에러경계
//*5.1 src/components 경로에 ErrorBoundary.tsx 파일 만듬
//*5.2 ErrorBoundary.css 파일 만들어서 스타일 수정

// React 라이브러리를 가져옵니다.
import React from "react";
// 에러 바운더리에 대한 스타일을 정의한 CSS 파일을 가져옵니다.
import "./ErrorBoundary.css";

// ErrorBoundary 컴포넌트의 props 타입을 정의합니다.
interface ErrorBoundaryProps {
  children: React.ReactNode[];
}

// ErrorBoundary 컴포넌트의 state 타입을 정의합니다.
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  info: object;
}

// ErrorBoundary 클래스 컴포넌트를 정의합니다.
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    // 초기 state를 설정합니다.
    this.state = {
      hasError: false,
      error: new Error(),
      info: { componentStack: "" },
    };
  }

  // 에러가 발생하면 상태를 업데이트하여 렌더링을 트리거합니다.
  static getDerivedStateFromError = (error: Error) => {
    return { hasError: true };
  };

  // 에러와 에러 정보를 포착하여 state에 저장합니다.
  componentDidCatch(error: Error | null, info: object) {
    console.log("error", error);
    this.setState({ hasError: true, error, info });
  }

  render() {
    // 에러가 발생한 경우, 에러 메시지를 렌더링합니다.
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2 style={{ padding: "2em" }}>
            Something has gone wrong. Please reload your screen.
          </h2>
        </div>
      );
    }

    // 에러가 발생하지 않은 경우, 자식 컴포넌트를 렌더링합니다.
    return this.props.children;
  }
}

// ErrorBoundary 컴포넌트를 외부에서 사용할 수 있도록 내보냅니다.
export default ErrorBoundary;
