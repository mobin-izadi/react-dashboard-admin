import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { usersData } from '../../data';

export default function UserDetails() {
    const id = useParams('id').id
    let mainUser = usersData.find(user => user.id == id)
    const [user, setUser] = useState(mainUser)

    const userNameHandler = event => {
        setUser(preState => {
            return { ...preState, customer: event.target.value }
        })
    }
    const emailHandler = event => {
        setUser(preState => {
            return { ...preState, email: event.target.value }
        })
    }
    const statusHandler = event => {
        setUser(preState => {
            return { ...preState, status: event.target.value }
        })
    }
    const transactionHandler = event => {
        console.log(event.target.value);

        let valueTransaction = event.target.value.split('')
        let convertValueToNumber = valueTransaction.map(num => {
            if (Number(num)) {
                return num
            }
        }).join('')
        console.log(convertValueToNumber);


        setUser(preState => {
            return { ...preState, transaction: Number(convertValueToNumber).toLocaleString() }
        })
    }

    return (

        <form action="" method="post">
            <div className='flex justify-center '>
                <div className='w-32 h-32 rounded-full overflow-hidden' >
                    <img src={user.img} alt="" className='w-full h-full object-cover' />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2 w-[700px] justify-items-end mx-auto my-5'>
                <div className='flex gap-2 items-center'>
                    <label htmlFor="username">User Name:</label>
                    <input type="text" name="" id="username" className='outline-none border h-10 rounded-md px-2 py-1 w-60' value={user.customer} onChange={event => userNameHandler(event)} />
                </div>
                <div className='flex gap-y-4 gap-x-2 items-center'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="" id="email" className='outline-none border h-10 rounded-md px-2 py-1 w-60' value={user.email} onChange={event => emailHandler(event)} />
                </div>
                <div className='flex gap-2 items-center'>
                    <label htmlFor="status">Status:</label>
                    <select name="status" id="" className='outline-none border h-10 rounded-md px-2 py-1 w-60' value={user.status} onChange={event => statusHandler(event)}>
                        <option value="active">active</option>
                        <option value="non-active">non-active</option>
                    </select>

                </div>
                <div className='flex gap-2 items-center'>
                    <label htmlFor="transaction">Transaction:</label>
                    <input type="text" name="" id="transaction" className='outline-none border h-10 rounded-md px-2 py-1 w-60' value={user.transaction.toLocaleString()} onChange={event => transactionHandler(event)} />
                </div>

            </div>
            <div className='flex items-center justify-center gap-2 mt-12'>
                <input type="submit" value='Submit' className='bg-blue-500 w-40 h-12 rounded-lg text-white cursor-pointer ' />
                <Link to='/users' className='flex justify-center items-center text-red-500 border border-red-500 w-40 h-12 rounded-lg  '>Cancel</Link>

            </div>


        </form>


    )
}
