import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';


export default function ShowUserInfo({ profile, name, lastName, position, phone, email, address, setShowUser }) {
    const userShowClose = () => {
        setShowUser(false)
    }
    return (
        <div className='fixed inset-0 flex justify-center items-center bg-white/10 backdrop-blur-sm !z-50'>
            <div className='bg-white rounded-lg shadow-lg w-[350px] sm:w-[620px]   p-5'>
                <div className='flex justify-end'>
                    <button onClick={userShowClose}>
                        <CloseIcon></CloseIcon>
                    </button>
                </div>
                <div className='w-20 h-20 overflow-hidden rounded-full mx-auto'>
                    <img src={profile} className='w-full h-full object-cover' alt="" />
                </div>
                <ul className='space-y-2 mt-3'>
                    <li className='space-x-2'>
                        <span className='text-gray-700'>First Name:</span>
                        <span className='text-lg'>{name}</span>
                    </li>
                    <li className='space-x-2'>
                        <span className='text-gray-700'>Last Name:</span>
                        <span className='text-lg'>{lastName}</span>
                    </li>
                    <li className='space-x-2'>
                        <span className='text-gray-700'>Position:</span>
                        <span className='text-lg'>{position}</span>
                    </li>
                    <li className='space-x-2'>
                        <span className='text-gray-700'>Email:</span>
                        <Link to={`mailto:${email}`}> <span className='text-lg'>{email}</span> </Link>

                    </li>
                    <li className='space-x-2'>
                        <span className='text-gray-700'>Phone:</span>
                        <Link to={`tel:${phone}`}> <span className='text-lg'>{phone}</span> </Link>

                    </li>
                    <li className='space-x-2'>
                        <span className='text-gray-700'>Address:</span>
                        <span className='text-lg'>{address}</span>
                    </li>
                </ul>

            </div>

        </div>
    )
}
