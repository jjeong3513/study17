import React from 'react';
import EventStyle from './../style/event.module.css';
import { Link } from 'react-router-dom';

const EventItem = ({data,index}) => {
    return (
        <li>
            <div className={EventStyle.num}>{index+1}</div>
            <div className={EventStyle.imgBox}>
                <img src={data.image} alt={data.title} />
            </div>
            <dl className={EventStyle.des}> 
                <dt>{data.title}</dt>
                <dd>{data.content}</dd>
                <dd><Link to="#">자세히 보기</Link></dd>
            </dl>
        </li>
    );
};

export default EventItem;