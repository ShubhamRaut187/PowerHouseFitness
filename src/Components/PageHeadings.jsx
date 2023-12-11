import React from 'react';
import './ComponentStyles/PageHeadings.css';

function PageHeadings({Heading}) {
    return (
        <div className='PageHeading_Main'>
            <h1>{Heading}</h1>
        </div>
    );
}

export default PageHeadings;