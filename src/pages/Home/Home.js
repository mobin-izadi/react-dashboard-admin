import React from 'react'
import Features from '../../components/Home/Features/Features'
import Chart from '../../components/Chart/Chart'
import { dataChartHome } from '../../data'
export default function Home() {
    return (
        <main className='space-y-5'>
            <Features></Features>
            <Chart title={'Month Sale'} data={dataChartHome} height={'h-[400px]'} yaxis={true} grid={true} ></Chart>

        </main>
    )
}
