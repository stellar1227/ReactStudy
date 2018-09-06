import React, { Component } from 'react';

class IterationSample extends Component {
    state = {
        names : ['눈사람', '얼음', '눈', '바람'],
        name : ''
    }

    handleChange = (e) => {
        this.setState({
            name : e.target.value
        })
    }

    handleInsert = () => {
        // names 배열에 값을 추가하고, name 값을 초기화 
        this.setState({
            names : this.state.names.concat(this.state.name),//concat으로 병합
            name : ''
        })
    }

    handleRemove = (index) => {
        //편의상 name의 레퍼런스를 미리 만든다.
        const { names } = this.state;
        //전개연산자와 슬라이스를 이용해 배열에 다시 넣어준다.
        this.setState({
            names : [
                ...names.slice(0,index),
                ...names.slice(index + 1, names.length)
            ]
        })
        //filter를 이용해 index를 제외한 원소로 배열 생성
        this.setState({
            names : names.filter((item, i) => i !== index)
        })
    }
    render() {        
        const nameList = this.state.names.map( //JSX를 이용한 loop
            (name, index) => (<li key={index} onDoubleClick={() => this.handleRemove(index)}>{name}</li>)
            
        )
        return (
            <div>
                <input 
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.name}    
                />
                <button 
                    type="button"
                    onClick={this.handleInsert}    
                >추가</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        );
    }
}

export default IterationSample;