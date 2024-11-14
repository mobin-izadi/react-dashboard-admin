import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function FeatureBox({ id, title, amount, rate, customStyle }) {
    return (
        <div className={`border shadow-sm rounded-lg w-full p-5 space-y-2 ${customStyle}`} >
            <span className='text-xl'>{title}</span>
            <div className='flex items-center gap-4'>
                <div className='font-medium text-3xl space-x-1'>
                    <span>$</span>
                    <span>{amount.toLocaleString()}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <span>{rate > 0 ? '+' : ''}{rate}</span>
                    <ArrowDownwardIcon className={`!w-6 !h-6 ${rate < 0 ? 'text-red-500' : 'text-green-500 rotate-180'}`}></ArrowDownwardIcon>
                </div>
            </div>
            <p className='text-gray-400'>Compared to last month</p>
        </div>
    )
}
