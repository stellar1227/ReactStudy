import React, { Component } from 'react';

class EventPractice extends Component {
    constructor(props){
        super(props);
        this.state = {
            msg : '',
            username : ''
        }
        this.handleChange = this.handleChange.bind(this);
        //메소드 바인딩은 생성자 함수에서 하는것이 원칙 
    }

    handleChange(e){ //Dom event에 onChange={handleChange}로 바인딩
        this.setState({//es6의 해체 할당이용
            [e.target.name] : e.target.value
        })
    }
    handleClick = () => { //화살표 함수를 이용한 this바인딩 필요없음!
        alert(this.state.msg + this.state.username);
        this.setState({
            msg : ''
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="msg"
                    placeholder="anything"
                    value={this.state.msg}
                    onChange={
                        (e)=>{ //SyntheticEvent객체
                            this.setState({
                                msg : e.target.value
                            })

                        }

                    }
                />
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleChange}                    
                    onKeyPress={this.handleKeyPress}
                />
                <button type="button" 
                onClick={this.handleClick}
                >추가</button>    
            </div>
        );
    }
}

export default EventPractice;