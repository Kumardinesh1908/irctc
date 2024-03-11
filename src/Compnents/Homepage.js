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
                <div className='w-[30rem] justify-between items-center flex flex-row'>
                    <div className='border w-16 h-9  bg-blue-800 '>
                        <p className='text-white pt-1'>LOGIN</p>
                    </div>
                    <div className='text-lg uppercase'>Register</div>
                    <div className='text-lg uppercase'>Contact Us</div>
                    <div className='text-lg uppercase'>Date</div>
                </div>
                <div className=''>
                    <img src={irctc} alt='' className='w-36' />
                </div>
            </div>
        </div>
    )
}

export default Homepage