import React from 'react'
import './LatestTransActions.css'
import { TransActionsData } from '../../../data'
import clsx from 'clsx'

export default function LatestTransActions() {
    const Button = ({ type }) => {
        let color = null
        switch (type) {
            case 'Approved':
                color = 'green'
                break;
            case 'Declined':
                color = 'red'
                break;
            case 'pending':
                color = 'blue'
                break;
            default:
                break;
        }
        return <button className={clsx('flex justify-center items-center w-[85px] h-8 rounded-lg',
            type === 'Approved'
                ? 'bg-green-100 text-green-500'
                : type === 'Declined'
                    ? 'bg-red-100 text-red-500'
                    : type === 'pending'
                        ? 'bg-blue-100 text-blue-500'
                        : ''
        )
        }>
            <span className={` text-sm font-light`}>{type}</span>
        </button >
    }

    return (
        <section className='bg-white rounded-lg border shadow-sm p-2 xl:p-5 basis-full lg:basis-1/2 xl:basis-2/3' >
            <span className='text-2xl'>Latest TransActions</span>
            {/* Latest TransActions wrapper */}
            <div className=' mt-3 overflow-x-auto'>
                <table className='w-full border-collapse z-0'>
                    <thead>
                        <tr >
                            <th className='text-start'>
                                Customer
                            </th>
                            <th className='text-start' >
                                Date
                            </th>
                            <th className='text-start'>
                                Amout
                            </th>
                            <th className='text-start'>
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {TransActionsData.map(TransAction => (
                            <tr key={TransAction.id}>
                                <td className='flex gap-2 items-center py-2 sm:py-5 mt-6 sm:mt-0 ' data-label='Customer'>
                                    <div className='block lg:hidden xl:block w-12 h-12 rounded-full overflow-hidden shrink-0'>
                                        <img src={TransAction.img} alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <span>{TransAction.customer} </span>
                                </td>
                                <td className='font-light py-2 sm:py-5 ' data-label='Date'>{TransAction.date} </td>
                                <td className='font-light  py-2 sm:py-5' data-label='Amount'>${TransAction.amount} </td>
                                <td className='py-2sm:py-5' data-label='Status'>
                                    <Button type={TransAction.status}></Button>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </div>
        </section >
    )
}
