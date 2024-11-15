import React from 'react'
import Features from '../../components/Home/Features/Features'
import Chart from '../../components/Chart/Chart'
import { dataChartHome } from '../../data'
import NewJoinUser from '../../components/Home/NewJoinUser/NewJoinUser'
import LatestTransActions from '../../components/Home/LatestTransActions/LatestTransActions'


export default function Home() {
    return (
        <main className='space-y-5'>
            <Features></Features>
            <Chart title={'Month Sale'} data={dataChartHome} height={'h-[400px]'} yaxis={true} grid={true} ></Chart>
            <div className='flex gap-5 flex-wrap lg:flex-nowrap'>
                <NewJoinUser></NewJoinUser>
                <LatestTransActions></LatestTransActions>
            </div>

        </main>
    )
}
