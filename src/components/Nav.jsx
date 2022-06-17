import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // 링크로 인해 페이지의 전환없이 한 경로에서 페이지가 전환되는 것을 볼 수 있음(새로고침이 눌리지 않음)

const Nav = () => {
    const navList=[
        {content:'Main',href:'/'},
        {content:'CardList',href:'cardList'},
        {content:'Notice',href:'notice'},
        {content:'Event',href:'event'},
        {content:'Form',href:'form'},
    ]
    return (
        <div id='nav'>
            <h2 className='blind'>메인 메뉴</h2>
            <ul>
              {
                navList.map((element,index)=>{
                    return(
                        <li key={index}><NavLink to={element.href} className={({isActive})=>
                         isActive? 'navlist on' : 'navlist'}>{element.content}</NavLink></li>
                    )
               })
              }
            </ul>
        </div>
    );
};

export default Nav;