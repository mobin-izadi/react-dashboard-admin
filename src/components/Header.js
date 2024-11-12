import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import profile from '../assets/images/profile.png'
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <header className='flex justify-between items-center gap-2 px-3 sm:px-6 py-3'>
            {/* logo */}
            <h2 className='font-bold text-xl sm:text-4xl'>Dashboard Admin</h2>
            {/* panel */}
            <div className='flex items-center gap-2 sm:gap-4'>
                {/* notific */}
                <div className='relative'>
                    <button><NotificationsIcon className='text-gray-800'></NotificationsIcon></button>
                    {/* notific num */}
                    <div className='absolute top-0 right-0 flex justify-center items-center w-[14px] h-[14px] bg-red-500 text-white rounded-full '>
                        <span className='text-[10px] font-light leading-none'>2</span>
                    </div>
                </div>
                {/* Language */}
                <div>
                    <button><LanguageIcon className='text-gray-800'></LanguageIcon></button>
                </div>
                {/* setting */}
                <div>
                    <button><SettingsIcon className='text-gray-800'></SettingsIcon></button>
                </div>
                {/* profile */}
                <div className='w-12 h-12 rounded-full overflow-hidden hidden lg:block'>
                    <img src={profile} alt="" className='w-full h-full object-cover' />
                </div>
                {/* menu hamberger */}
                <button className='inline-block lg:hidden'>
                    <MenuIcon className='!w-8 !h-8'></MenuIcon>
                </button>


            </div>
        </header>
    )
}
