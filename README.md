# Simple note - react  version

## 1. 프로젝트 구조 설정

## 2. UI 컴포넌트 작성하기

![image](https://user-images.githubusercontent.com/61222924/96749401-bb9db900-1405-11eb-97c6-45576adb9b5f.png)

리액트 컴포넌트는 대개 UI 요소를 따라 구성하게 됩니다.
그러면 헤더는 Header /, 좌측 리스트는 List / 그리고 노트에디터는 Note /로 구성할 수 있습니다. 그리고 리스트의 각 영역은 ListItem /으로 구성할께요.

## 3. state로 데이터 관리하기
이제 저희가 작성할 노트를 state 데이터로 관리해보도록 하겠습니다.

* state란 UI의 상태를 기록하는 데이터입니다.일반적으로 버튼의 활성화 상태, input의 입력 값, 체크박스 체크 여부 등의 상태를 관리하죠 *

* props는 상위 컴포넌트가 하위 컴포넌트에 데이터를 전달하는 방법입니다. 하위 컴포넌트는 <strong>this.props</strong> 를 참조하여 데이터에 접근할 수 있죠. 이때, props 데이터는 읽기 전용이기 때문에 절대 변경해서는 안됩니다. 왜냐하면 컴포넌트는 pure function 처럼 작동해야 하기 때문이죠. UI를 변경할 필요가 있다면 STATE를 활용하면 됩니다. 😊 !!
