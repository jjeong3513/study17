import React from 'react';
import './../style/main.css';
import { useState, useEffect, useRef } from 'react';

const Main = () => {
    const listData = ['content01','content02','content03','content04']; 
    listData.unshift(listData[listData.length-1])
    const [num, setNum] = useState(0);
    const [check, setCheck] = useState('next');
    const checkRef = useRef('next')
    //console.log(checkRef)  // {current:'next'} useRef는 객체타입으로 값을 저장하고 사용할 수 있다. 컴포넌트 함수를 재랜더링하는 기능은 없다.

    //돔에 직접 접근할 때 쓰는 Hook -> useRef
    //스크롤, 폼, 비디오를 제어할 떄는 돔에 직접 접근해야함 

    const fncClassAdd = (i)=>{ 
        const on = (i===num) ? ' on' : ' on'; 
        const view = 'view_';
        //const textNum = "0"+(i+1); // 01, 02, 03 이런 식으로 뒤의 숫자만 1씩 커져야 하니까
        const textNum = "00000"+(i+1);
        const viewText = view + textNum.slice(-2); 
        console.log(viewText)
        return viewText+on

    }
    const initialsetStyle = {
        position : 'relative',
        left: '-100%',
        marginLeft : `${num * -100}%`, 
        
    }

    const [slideStyle, setSlideStyle] = useState(initialsetStyle)

    const fncPrevStyle = ()=>{
        setSlideStyle({
            ...initialsetStyle,
            transition : (num!==3) ? 'margin 500ms ease' : 'none',
            animation : (num===3) ? 'lastSlide 500ms ease 1' : 'none'
        })
    }
    const fncNextStyle = ()=>{
        setSlideStyle({
            ...initialsetStyle,
            transition : (num!==0) ? 'margin 500ms ease' : 'none',
            animation : (num===0) ? 'firstSlide 500ms ease 1' : 'none'
        })
    }
    const fncPrevSlide = ()=>{
        setNum(num<=0 ? 3:num-1);
        checkRef.current = 'prev';
    }
    const fncNextSlide = ()=>{
        setNum(num>=3 ? 0:num+1);
        checkRef.current = 'next';
    }
// next 버튼을 클릭하면 fncNextSlide 호출
// num => +1  check = next
// useEffect를 사용해서 num의 변화를 감지해서 채크상태 감지  
// next가 들어가 있으면 fncNextStyle 함수를 호출해서 ul fncNextStyle 안의 스타일을 적용한다

    useEffect(()=>{
        (checkRef.current === 'next') ? fncNextStyle() : fncPrevStyle() ;
    },[num])
    return (
        <div className='mainContainer'>
            <h2>메인페이지</h2>
                <div className='viewBox'>
                    <div className='slideBtn'>
                        <button type='button' onClick={fncPrevSlide}>이전</button> 
                        <button type='button' onClick={fncNextSlide}>이후</button>
                    </div>
                </div>
                <div className='viewContents'>
                    <ul style={slideStyle}>
                        {
                            listData.map((list, index)=>{
                                return(
                                    <li className={fncClassAdd(index)}>{list}</li>
                                ) 
                            })
                        }
                    </ul>
                </div>
        </div>
    );
};

export default Main;

/* 
const list = [1,2,3,4,5,a,b]
const list2 = list
const list2 = [...list]
const obj = {a:1, b:2, c:3}
// const obj2 = obj  참조만 맞춘 것
const obj2 = {...obj, c:4, b:1, e:8} //순서가 아니라 키값으로 참조되기 때문에 순서는 상관없음
console.log(obj, obj2)



useState : 값이 바뀌면 해당하는 변수에 값을 재할당(업데이트)하기 위해서 component를 다시 랜더링
useRef : 값이 바뀌더라도 리랜더 되지 않는다(다시 랜더링되지 않고 한번애 값을 가지고 있는다.)

const box = {a : 0}
box.a = 10 -> 함수가 재랜더링되지 않고 값을 가짐 (useRef)

const useState [box, setBox] = useState(0)
setBox(10) //매개변수를 다시 넣어서 함수를 재실행
useState는 콜백함수임

*/

