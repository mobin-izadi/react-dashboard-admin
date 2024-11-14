import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({ title, data, height, yaxis, grid }) {
    console.log(height);

    return (
        <section className='bg-white rounded-lg border shadow-sm p-5 '>
            <span className='text-2xl'>{title}</span>
            <div className={`w-full  mt-4 ${height}`}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={800}
                        height={400}
                        data={data}
                        margin={{
                            top: 0,
                            right: 0,
                            left: -28,
                            bottom: 0,
                        }}
                    >
                        {grid && <CartesianGrid strokeDasharray="3 3" />}
                        <XAxis dataKey="name" />
                        {yaxis && <YAxis />}
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" dot={{ r: 5 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section >
    )
}
