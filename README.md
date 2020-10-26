# Simple note - react  version

## 1. 프로젝트 구조 설정

## 2. UI 컴포넌트 작성하기

https://miro.medium.com/max/700/1*TG9BBaIsfIUlL7_ZvN8H-g.png

리액트 컴포넌트는 대개 UI 요소를 따라 구성하게 됩니다.
그러면 헤더는 Header /, 좌측 리스트는 List / 그리고 노트에디터는 Note /로 구성할 수 있습니다. 그리고 리스트의 각 영역은 ListItem /으로 구성할께요.

## 3. state로 데이터 관리하기
이제 저희가 작성할 노트를 state 데이터로 관리해보도록 하겠습니다.

* state란 UI의 상태를 기록하는 데이터입니다.일반적으로 버튼의 활성화 상태, input의 입력 값, 체크박스 체크 여부 등의 상태를 관리하죠 *

- App 컴포넌트의 state에 notes 와 activeId를 설정
- notes는 앱의 노트 정보를 담은 array
- activeId는 리스트에서 유저가 선택하여 활성화 된 노트의 id를 기록


## 4. List 렌더링하기
List 컴포넌트가 notes 데이터를 props로 전달받게 되었으니, 그 데이터에 따라 노트 리스트를 그리도록 해보겠습니다.