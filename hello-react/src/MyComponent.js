import React, { Component } from 'react'; //모듈 주입

//컴포넌트 생성
class MyComponent extends Component {
    render() {
        return (
            <div>
                안녕하세요, 제 이름은 {this.props.name} 입니다.
            </div>
        );
    }
}
//모듈 내보내기
export default MyComponent;