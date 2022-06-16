import React from 'react';
import '../style/footer.css';
import { NavLink } from 'react-router-dom';

const Footer = ({title}) => {
    const fncActive = ({isActive})=>{
        return isActive? 'on' : ''
    }
    return (
        <footer id="footer">
            <h2>{title} 정보 </h2>
            <div className='company-info'>
                <ul>
                    <li><NavLink to="/manual" className={fncActive}>이용약관</NavLink></li>
                    <li><NavLink to="/policy" className={fncActive}>개인정보처리방침</NavLink></li>
                    <li><NavLink to="/rule" className={fncActive}>회사개요</NavLink></li>
                    <li><NavLink to="/etcInfo" className={fncActive}>기타정보</NavLink></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;