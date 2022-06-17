import React from 'react';
import './../style/main.css';
import { useState } from 'react';

const Main = () => {
    const listData = ['content01','content02','content03','content04']; 
    listData.unshift(listData[listData.length-1])
    const [num, setNum] = useState(0);
    const fncClassAdd = (i)=>{ 
        const on = (i===num) ? ' on' : ' on'; //인덱스번호랑 num이 같으면 on이 클래스 뒤에 붙는 것.-> on 쓸 때 따옴표로 안묶어주면 화면에 출력 안됨. 그리고 on 앞에 한 칸 띄어써줘야함 
        const view = 'view_';
        //const textNum = "0"+(i+1); // 01, 02, 03 이런 식으로 뒤의 숫자만 1씩 커져야 하니까
        const textNum = "00000"+(i+1);
        const viewText = view + textNum.slice(-2); 
        console.log(viewText)
        return viewText+on

    }
    const setStyle = {
        position : 'relative',
        left: '-100%',
        marginLeft : `${num * -100}%`, 
        transition : (num!==0) ? 'margin 500ms ease' : 'none', /*500ms = 0.5s / ease는 빠르게 가다가 부드럽게 가는 등 그런거 종류*/ 
        animation : (num===0) ? 'firstSlide 500ms ease 1' : 'none'  /*num이 0일 때는 트랜지션을 주지 않고 애니메이션이 실행되도록 함*/
    }
    return (
        <div className='mainContainer'>
            <h2>메인페이지</h2>
                <div className='viewBox'>
                    <div className='slideBtn'>
                        <button type='button' onClick={()=>{setNum(num<=0 ? 3: num-1)}}>이전</button> 
                        <button type='button' onClick={()=>{setNum(num>=3 ? 0: num+1)}}>이후</button>
                    </div>
                </div>
                <div className='viewContents'>
                    <ul style={setStyle}>
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


