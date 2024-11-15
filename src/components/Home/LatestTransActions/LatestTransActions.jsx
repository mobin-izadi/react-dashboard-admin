import React from 'react'
import './LatestTransActions.css'
export default function LatestTransActions() {
    return (
        <section className='bg-white rounded-lg border shadow-sm p-2 xl:p-5 basis-full lg:basis-1/2 xl:basis-2/3' >
            <span className='text-2xl'>Latest TransActions</span>
            {/* Latest TransActions wrapper */}
            <div className=' mt-3 overflow-x-auto'>
                <table className='w-full border-collapse'>
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
                        <tr>
                            <td className='flex gap-2 items-center py-2 sm:py-5 mt-6 sm:mt-0 ' data-label='Customer'>
                                <div className='block lg:hidden xl:block w-12 h-12 rounded-full overflow-hidden shrink-0'>
                                    <img src="/images/profiles/1.png" alt="" className='w-full h-full object-cover' />
                                </div>
                                <span>Mobin</span>
                            </td>
                            <td className='font-light py-2 sm:py-5 ' data-label='Date'>12 Jun 2022</td>
                            <td className='font-light  py-2 sm:py-5' data-label='Amount'>$123</td>
                            <td className='py-2sm:py-5' data-label='Status'>
                                <div className='flex justify-center items-center w-[85px] h-8 bg-green-100 rounded-lg '>
                                    <span className='text-green-500 text-sm font-light'>Approved</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='flex gap-2 items-center py-2 sm:py-5 mt-6 sm:mt-0 ' data-label='Customer'>
                                <div className='block lg:hidden xl:block w-12 h-12 rounded-full overflow-hidden shrink-0'>
                                    <img src="/images/profiles/2.jpg" alt="" className='w-full h-full object-cover' />
                                </div>
                                <span>Alireza</span>
                            </td>
                            <td className='font-light py-2 sm:py-5 ' data-label='Date'>12 Jun 2022</td>
                            <td className='font-light  py-2 sm:py-5' data-label='Amount'>$123</td>
                            <td className='py-2sm:py-5' data-label='Status'>
                                <div className='flex justify-center items-center w-[85px] h-8 bg-red-100 rounded-lg '>
                                    <span className='text-red-500 text-sm font-light'>Declined</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='flex gap-2 items-center py-2 sm:py-5 mt-6 sm:mt-0 ' data-label='Customer'>
                                <div className='block lg:hidden xl:block w-12 h-12 rounded-full overflow-hidden shrink-0'>
                                    <img src="/images/profiles/3.jpg" alt="" className='w-full h-full object-cover' />
                                </div>
                                <span>Amir</span>
                            </td>
                            <td className='font-light py-2 sm:py-5 ' data-label='Date'>12 Jun 2022</td>
                            <td className='font-light  py-2 sm:py-5' data-label='Amount'>$123</td>
                            <td className='py-2sm:py-5' data-label='Status'>
                                <div className='flex justify-center items-center w-[85px] h-8 bg-blue-100 rounded-lg '>
                                    <span className='text-blue-500 text-sm font-light'>pending</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='flex gap-2 items-center py-2 sm:py-5 mt-6 sm:mt-0 ' data-label='Customer'>
                                <div className='block lg:hidden xl:block w-12 h-12 rounded-full overflow-hidden shrink-0'>
                                    <img src="/images/profiles/4.jpg" alt="" className='w-full h-full object-cover' />
                                </div>
                                <span>Kian</span>
                            </td>
                            <td className='font-light py-2 sm:py-5 ' data-label='Date'>12 Jun 2022</td>
                            <td className='font-light  py-2 sm:py-5' data-label='Amount'>$123</td>
                            <td className='py-2sm:py-5' data-label='Status'>
                                <div className='flex justify-center items-center w-[85px] h-8 bg-green-100 rounded-lg '>
                                    <span className='text-green-500 text-sm font-light'>Approved</span>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </section >
    )
}
