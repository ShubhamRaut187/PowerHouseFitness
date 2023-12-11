import React from 'react';
import './ComponentStyles/GeneralText.css'

function GeneralText({Text}) {
    return (
        <div className='GeneralText_main'>
            <p>{Text}</p>
        </div>
    );
}

export default GeneralText;