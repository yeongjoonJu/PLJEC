### Installed packages

#### 경로(Node_PATH)

+ cross-env --dev

#### Redux(리덕스) { Link, NavLink, Route, BrowserRouter }

+ redux
+ react-redux
+ redux-actions
+ immutable

#### React Router

+ react-router-dom
+ query-string : URL 쿼리 해석 라이브러리

#### 웹 요청 클라이언트

+ axios
+ body-parser : JSON 형태의 데이터를 HTTP 요청에서 파싱할 때 사용

#### CSS, SaSS 라이브러리

+ classnames: CSS Module과 조건부 className을 설정하는 것을 도와주는 라이브러리
+ sass-loader : SaSS 사용 시 필요 라이브러리
+ node-sass:  SaSS 사용 시 필요 라이브러리
+ include-media: Sass 라이브러리(반응형 디자인)
+ open-color: 색상 팔레트
+ better-react-spinkit: 로딩 시 필요 컴포넌트

#### 서버

+ yarn global add serve [ serve -s build를 통해 시작]

#### 기타

+ moment : 날짜 관련 라이브러리
+ react-scrollbar



I used semantic-ui



Error: spawn react-scripts ENOENT
    at notFoundError

특정 패키지를 설치하고나서 `yarn start`를 실행하면 위와 같은 에러가 뜨면서 실행이 안 되는 경우가 있다. 이럴 때는 npm uninstall -g yarn으로 yarn 패키지를 제거하고 다시 yarn으로 설치하면 된다.

npm install semantic-ui-react

[사용법](https://react.semantic-ui.com/usage)