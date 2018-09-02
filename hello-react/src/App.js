import React, { Component , Fragment } from 'react';

class App extends Component {
  render() {
    const text = '잘 해보자!'; {/*const 상수선언시, let 변수선언시*/} 
    const condition = true;
    const style = {
      backgroundColor : 'gray',
      fontSize : '30px',
      width : Math.round(Math.random() * 300) + 50
    }
    return (
      <Fragment>        
        {/* 하나로 감싸는 부모요소가 있어야 함 , 불필요한 div 사용대신 fragment 객체를 사용 */}
        <h1 className="my_div">리액트 안녕!</h1>  
        <p>{text}</p>
        {
          condition ? '참' : '거짓' 
        }
        {
          condition && '보여주세요'
        }
        <div style={style}>어때?</div>
      </Fragment>
    );
  }
}

export default App;
