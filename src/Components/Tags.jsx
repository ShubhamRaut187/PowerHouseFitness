import React from 'react';
import './ComponentStyles/Tags.css'
function Tags({Text}) {
    return (
        <div className='tag_main'>
            <p>{Text}</p>
        </div>
    );
}

export default Tags;