import React, { useState } from 'react'
import SidebarBox from './SidebarBox';
// icons
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import EmailIcon from '@mui/icons-material/Email';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';


export default function Sidebar() {
    const [dashboard, setDashboard] = useState({
        title: 'Dashboard',
        items: [
            { id: 0, title: 'Home', icon: <HomeIcon />, path: '/' },
            { id: 1, title: 'Analytics', icon: <TimelineIcon />, path: '/analytics' },
            { id: 2, title: 'Sales', icon: <TrendingUpIcon />, path: '/sales' },
        ]
    })
    const [quickMenu, setQuickMenu] = useState({
        title: 'Quick Menu',
        items: [
            { id: 0, title: 'Users', icon: <PersonIcon />, path: '/users' },
            { id: 1, title: 'New user', icon: <PersonAddIcon />, path: '/new-user' },
            { id: 2, title: 'Products', icon: <StorefrontIcon />, path: '/products' },
            { id: 3, title: 'Transactions', icon: <MonetizationOnIcon />, path: '/transactions' },
            { id: 4, title: 'Reports', icon: <EqualizerIcon />, path: '/reports' },
        ]
    })
    const [notifications, setNotifications] = useState({
        title: 'Notifications',
        items: [
            { id: 0, title: 'Mail', icon: <EmailIcon />, path: '/mail' },
            { id: 1, title: 'Feedback', icon: <DynamicFeedIcon />, path: '/feedback' },
            { id: 2, title: 'Messages', icon: <ChatBubbleOutlineIcon />, path: '/Messages' },
        ]
    })
    const [staff, setStaff] = useState({
        title: 'Staff',
        items: [
            { id: 0, title: 'Manage', icon: <ManageAccountsIcon />, path: '/manage' },
            { id: 1, title: 'Analytics', icon: <TimelineIcon />, path: '/Analytics-staff' },
            { id: 2, title: 'Reports', icon: <AssessmentIcon />, path: '/Reports-staff' },
        ]
    })
    return (
        <aside className="fixed top-0 lg:top-[72px] -left-52 lg:left-0 bottom-0 w-52 lg:w-1/5  overflow-y-auto  bg-[#FAFCFF] p-3 custom-scroll z-50">
            <div className='flex justify-end lg:hidden'>
                <CloseIcon className='cursor-pointer'></CloseIcon>
            </div>
            <SidebarBox {...dashboard}></SidebarBox>
            <SidebarBox {...quickMenu} className="mt-3"></SidebarBox>
            <SidebarBox {...notifications} className="mt-3"></SidebarBox>
            <SidebarBox {...staff} className="mt-3"></SidebarBox>
            <button className='mt-5'><LogoutIcon className='w-7 h-7'></LogoutIcon> Log Out</button>
        </aside>
    )
}
