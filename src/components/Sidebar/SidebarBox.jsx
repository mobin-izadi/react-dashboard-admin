import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SidebarBox({ title, items, className }) {

    return (
        <div className={className ? className : ''}>
            <span className='font-bold text-sm text-gray-400'>{title}</span>
            <ul className='space-y-1 ml-3 mt-2'>
                {items.map(item => (
                    <li key={item.id} >
                        <NavLink to={item.path} className={({ isActive }) => `flex items-center gap-1 transition-all hover:bg-blue-50 rounded-lg px-1 py-2 ${isActive ? 'bg-blue-50' : ''}`}>
                            {React.cloneElement(item.icon, { className: '!w-6 !h-6' })}
                            {item.title}
                        </NavLink>
                    </li>

                ))}
            </ul>
        </div>
    )
}
