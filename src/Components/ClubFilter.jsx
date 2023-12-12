import React from 'react';
import './ComponentStyles/ClubFilter.css'
function ClubFilter(props) {
    return (
        <div className='club_filter_main'>
            <p>Search by city: </p>
            <select>
                <option value="">Select City</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Banglore">Banglore</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Delhi">Delhi</option>
            </select>
        </div>
    );
}

export default ClubFilter;