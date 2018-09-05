import React, { Component } from 'react';

class ScrollBox extends Component {
    
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box ; //비구조화할당
        this.box.scrollTop = scrollHeight - clientHeight;   
    }
    render() {
        const style = {
            border : '1px solid black',
            height : '200px',
            width : '200px',
            overflow : 'auto',
            position : 'relative'
        }

        const innerStyle = {
            width : '100%',
            height : '500px',
            background : 'linear-gradient(white, black)'
        }

        return (
            <div
                style={style}
                ref={(ref) =>{this.box=ref}}
            >
                <div style={innerStyle}></div> 
            </div>
        );
    }
}

export default ScrollBox;