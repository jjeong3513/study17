import React from 'react';
import './../../style/footerMenu.css'
import ManualStyle from './../../style/manual.module.css';

/*
export function Manual(){
    return (
        <div>
            <h2>메뉴얼 페이지</h2>
        </div>
    )
}
*/

const Manual = () =>{
    return (
        <div className='footerMenu'>
            <h2 className='title'>메뉴얼 페이지</h2>
        </div>
    )
}

const Rule = () =>{
    return (
        <div className='footerMenu'>
            <h2 className={ManualStyle.title}>회사개요 페이지</h2>
        </div>
    )
}

const EtcInfo = () =>{
    return (
        <div className='footerMenu'>
            <h2 className='title'>기타정보 페이지</h2>
        </div>
    )
}

const Policy = () =>{
    return (
        <div className='footerMenu'>
            <h2 className='title'>개인정보처리방침</h2>
        </div>
    )
}
export {Manual, Rule, Policy, EtcInfo} 