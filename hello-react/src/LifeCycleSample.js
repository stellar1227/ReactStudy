import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number : 0,
        color : null
    }

    myRef = null; //ref 설정 ... 왜하지?

    constructor(props){
        super(props);
        console.log('constructor');
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.color !== prevState.color){
            return {
                color : nextProps.color
            }
        }
        return null;
    }
    
    componentDidMount() {
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        
    }

    componentWillUnmount() {
        
    }

    handleClick = () => {
        this.setState({
            number : this.state.number + 1
        })
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        
    }

    componentDidUpdate(prevProps, prevState) {
        
    } 
    
    
    render() {
        console.log('render')
        return (
            
            <div>

            </div>
        );
    }
}

export default LifeCycleSample;