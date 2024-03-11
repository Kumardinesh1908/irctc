import React from 'react';
import indianrailway from '../assets/railway-logo.jpg';
import irctc from '../assets/IRCTC-Logo.png';

const Homepage = () => {
    return (
        <div>
            <div className='flex flex-row justify-between p-6 h-32'>
                <div className=''>
                    <img src={indianrailway} alt='' className='w-20' />
                </div>
                <div className='flex flex-row gap-5'>
                    <div className='border w-16 h-8'>
                        <p>Login</p>
                    </div>
                    <div>Register</div>
                    <div>Contact Us</div>
                    <div>Date</div>
                </div>
                <div className=''>
                    <img src={irctc} alt='' className='w-36' />
                </div>
            </div>
        </div>
    )
}

export default Homepage