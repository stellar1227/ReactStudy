# React Study
**스터디 참고도서 : 리액트를 다루는 기술 (김민준 저, 2018.08)**

**Basic**
1. ~~리액트 시작 : 개념 이해 및 환경 설정 (yarn, vsCode, cra, git 사용)~~
2. ~~Jsx~~
3. 컴포넌트 (props, state)
4. 이벤트 핸들링
5. ref (DOM에 이름달기)
6. 반복 (map(), key)
7. 라이프사이클 메소드
8. 함수형 컴포넌트
9. 스타일링

**Practice**
1. 일정관리 어플
2. 컴포넌트 리렌더링 최적화
3. 리덕스로 상태관리 
4. 리덕스, 더 편하게 사용
5. 리덕스 미들웨어와 외부 데이터 연동
6. react-router로 SPA 개발
7. 코드 스플리팅
8. 백엔드 : Node.js 의 Koa 사용
9. 디비 : MongoDB 연동실습 , Mongoose 사용

**Blog Project** 
1. 프로젝트 구조잡기
2. 기본 유저 인터페이스 생성
3. Post List UI 구성
4. Post UI 구성
5. Editor UI 구현
6. 마크다운 에디터 구현
7. 포스트 작성
8. 포스트 보여주기
9. 포스트 목록 보여주기
10. 포스트 수정 및 삭제
11. 관리자 로그인 인증 구현
12. 코드 스플리팅
13. 서버사이드 렌더링
14. 404 페이지 완성
15. react-helmet을 이용한 페이지 head 태그 작성

# basic 

**2018.08 최초작성**
## React 시작 
### 리액트를 사용하는 이유
- 최대한 성능을 아끼고 편안한 UX를 제공하기 위함
- 단방향 구조로 데이터가 변할 때 마다 어떤 변화를 줄지 고민 할 필요 없이 날려버리고 새로 그리는 방식. 
- 그저 view가 어떻게 될 지만 선언하면 데이터 변경시 새로 그려줌
- 무조건 성능이 좋은 것은 아니다. 잘 만들어야 성능이 좋겠지. 

### 리액트의 이해 
- JS 라이브러리 UI를 만드는데 사용한다. only View가 특징
- 컴포넌트는 여타 프레임워크의 template과 다르게 재사용이 가능한 수 많은 API를 내장한 객체를 반환 한다.
- 리액트가 리렌더링 하며 성능을 아끼고, 최적의 유저경험을 제공하는 비밀(?)을 파악하려면 초기 렌더링, 그리고 리렌더링의 개념을 이해해 본다. 
    
#### 초기 렌더링
- 리액트의 render 함수 : 컴포넌트가 어떻게 생겼는지 정의하고, 어떻게 작동하는지 정보를 지닌 객체를 반환.
- 컴포넌트 내부에는 또 다른 컴포넌트 삽입 가능
- 최상위 컴포넌트의 렌더링이 끝나면 정보를 이용하여 HTML을 만들고 DOM안에 주입.

#### 조화 과정 (리렌더링) 
- 데이터의 변화가 있을 시 뷰를 새 것으로 갈아끼움
- render 담당 
- 초기 렌더링과 다르게 결과를 곧바로 DOM에 반환하지 않고, 기존의 컴포넌트 정보와 현재 정보를 비교하여 반영한다.

### 리액트의 특징
- Virtual DOM의 사용으로 DOM 업데이트 추상화 : DOM처리 횟수 최소화
- 1. 데이터 업데이트 시 전체 UI를 Virtual DOM에 리렌더링
  1. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교
  2. 바뀐 부분만 실제 DOM에 적용
- 업데이트의 간결성이 주 특징이므로 특성에 맞추어 적절한 곳에 사용
- only view만 담당하다보니 서드파티 라이브러리를 여러개를 접해야한다는 단점
  

### 환경설정
- yarn, creat-react-app, git, gitHub연동, gitFlow 사용
- vsCode 사용
- window
