import React, { useState } from 'react'
import { users } from '../../../data'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShowUserInfo from './ShowUserInfo';

export default function NewJoinUser() {
    const [usersData, setUsersData] = useState(users)
    const [showUser, setShowUser] = useState(false)
    const [userShowInfo, setUserShowInfo] = useState(null)

    const showUserInfo = (id) => {
        let mainUser = usersData.find(user => user.id == id)
        setUserShowInfo(mainUser)
        setShowUser(true)

    }


    return (
        <>
            <section className='bg-white rounded-lg border shadow-sm p-2 xl:p-5 basis-full lg:basis-1/2 xl:basis-1/3 '>
                <span className='text-2xl'>New Join Members</span>
                <ul className='mt-4 space-y-4'>
                    {usersData.slice(0, 5).map((user) => (
                        <li key={user.id} className='flex justify-between items-center gap-5'>
                            <div className='w-12 h-12 rounded-full overflow-hidden'>
                                <img src={user.profile} alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className=' text-xl'>{user.name + ' ' + user.lastName}</span>
                                <span className='text-gray-600 font-light line-clamp-1'>{user.position}</span>
                            </div>
                            <button className='bg-gray-300 rounded-lg w-9 h-7 flex justify-center items-center' onClick={() => showUserInfo(user.id)}>
                                <RemoveRedEyeIcon className='text-gray-500 !w-5 !h-5'></RemoveRedEyeIcon>
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
            {/* modal show user info */}
            {showUser && <ShowUserInfo {...userShowInfo} setShowUser={setShowUser}></ShowUserInfo>}

        </>

    )
}
