import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart() {
    const data = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 200 },
        { name: 'Apr', value: 278 },
        { name: 'May', value: 189 },
        { name: 'Jun', value: 239 },
        { name: 'Jul', value: 349 },
        { name: 'Aug', value: 200 },
        { name: 'Sep', value: 300 },
        { name: 'Oct', value: 400 },
        { name: 'Nov', value: 100 },
        { name: 'Dec', value: 500 },
    ];

    return (
        <div className='bg-white rounded-lg border shadow-sm p-5 '>
            <span className='text-2xl'>Month Sale</span>
            <div className='w-full h-[400px] mt-4'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={800}
                        height={400}
                        data={data}
                        margin={{
                            top: 0,
                            right: 0,
                            left: -20,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />

                        <Line type="monotone" dataKey="value" stroke="#8884d8" dot={{ r: 5 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
