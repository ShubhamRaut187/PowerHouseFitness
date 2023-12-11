import React from 'react';
import './ComponentStyles/MessageInfo.css';

function MessageInfo({Image,Message,MessageTitle,BgColor,MsgColor,MsgTitleColor}) {
    return (
        <div className='MessageInfo_main' style={{backgroundColor:BgColor}}>
            <div className='MessageInfo_img_div'>
                <img src={Image} alt="img" />
            </div>
            <div className='MessageInfo_info_div'>
                <h1 style={{color:MsgTitleColor}}>{MessageTitle}</h1>
                <p style={{color:MsgColor}}>{Message}</p>
            </div>
        </div>
    );
}

export default MessageInfo;