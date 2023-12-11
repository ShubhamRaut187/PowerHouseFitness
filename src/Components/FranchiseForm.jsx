import React from 'react';
import './ComponentStyles/FranchiseForm.css'
function FranchiseForm(props) {
    return (
        <div className='FranchiseForm_main'>
            <div className='franchiseform_msg_div'>
                <h1>Become a entrepreneur...</h1>
                <p>Seize the opportunity to shape a healthier and stronger tomorrow by joining Power House Fitness as an entrepreneur. Empower your community, build a legacy of wellness, and redefine success on your terms. Own your journey, inspire lives, and let the Power House Fitness franchise be the catalyst for your entrepreneurial greatness!</p>
            </div>
            <div className='franchiseform_from_div'>
                <h1>Franchise enquiry...</h1>
                <form>
                    <input type="text" name="" placeholder='Name' className='franchiseform_input'/>
                    <input type="email" placeholder='Email' className='franchiseform_input'/>
                    <input type="number" placeholder='Mobile Number' className='franchiseform_input'/>
                    <select className='franchiseform_input'>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Banglore">Banglore</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Ahemdabad">Ahemdabad</option>
                    </select>
                    <input type="submit" value='Send'className='franchiseform_submit_btn'/>
                </form>
            </div>
        </div>
    );
}

export default FranchiseForm;