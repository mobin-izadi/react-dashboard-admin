import React, { useContext, useState } from 'react'
import MobileMenuContext from '../../context/MobileMenuContext';

// icons
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import profile from '../../assets/images/profile.png'
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';


export default function Header() {
    let mobileMenuBtn = useContext(MobileMenuContext)
    const [notific, setNotific] = useState([
        { id: 0, massage: 'You have 1 massage', isRead: false },
        { id: 1, massage: 'New user joined', isRead: false },
        { id: 2, massage: 'A new product has been added', isRead: false },
    ])



    const readNotific = (id) => {
        console.log(id);


    }

    const mobileMenuHandler = () => {
        mobileMenuBtn.setMobileMenu(preValue => !preValue)
    }

    return (
        <header className='flex justify-between items-center gap-2 px-3 sm:px-6 py-3'>
            {/* logo */}
            <h2 className='font-bold text-xl sm:text-4xl'>Dashboard Admin</h2>
            {/* panel */}
            <div className='flex items-center gap-2 sm:gap-4'>
                {/* notific */}
                <div className='relative group'>
                    <button><NotificationsIcon className='text-gray-800'></NotificationsIcon></button>
                    {/* notific num */}
                    {notific.length > 0 ? (<div className='absolute top-0 right-0 flex justify-center items-center w-[14px] h-[14px] bg-red-500 text-white rounded-full '>
                        <span className='text-[10px] font-light leading-none'>{notific.length}</span>
                    </div>) : ''}
                    {/* list notific */}
                    <ul className='opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all absolute -right-24 sm:right-0 w-[300px] sm:w-[350px] h-40 bg-white rounded-lg shadow-md border z-30  p-2 overflow-y-auto custom-scroll space-y-1'>
                        {notific.map(noti => (
                            <li key={noti.id} className='flex justify-between items-center gap-1 border-b pb-1 '>
                                <span className='line-clamp-1'> {noti.massage}</span>
                                <button className='bg-blue-500 text-white rounded-md py-1 px-3' onClick={() => readNotific(noti.id)}>Read</button>
                            </li>
                        ))}
                    </ul>

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
                {/* menu hamburger */}
                <button className='inline-block lg:hidden' onClick={mobileMenuHandler}>
                    <MenuIcon className='!w-8 !h-8'></MenuIcon>
                </button>


            </div>
        </header>
    )
}
