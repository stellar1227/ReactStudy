import React, { Component } from 'react'; //모듈 주입
import PropTypes from 'prop-types'; // props 검증모듈

//컴포넌트 생성
class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state = { //생성자 함수 안에서 state 선언
            number : 0
        }
    }
    static defaultProps = {
        name : '기본이름' //es6 stage-2, tranform-class-propeties 문법
    }
    render() {
        return (
            <div>
                <div>
                    안녕하세요, 제 이름은 {this.props.name} 입니다.
                </div>
                <p>저는 {this.props.age} 살 입니다.</p>
                <p>{this.state.number} 회</p>
                <button type="button" onClick={()=>{
                    this.setState({
                        number : this.state.number + 1
                    })
                }}>
                증가
                </button>
            </div>
        );
    }
}

/* 전통적 defaultProps 설정
MyComponent.defaultProps = {
    name : '기본이름'
}*/

MyComponent.propTypes = {
    name : PropTypes.string.isRequired ,// props 타입을 문자열로 설정.
    age : PropTypes.number.isRequired // 필수로 존재하여야 함 숫자.
}
//모듈 내보내기
export default MyComponent;