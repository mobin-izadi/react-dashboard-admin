import React, { useState } from 'react'
import FeatureBox from './FeatureBox'
export default function Features() {
    const [data, setData] = useState([
        { id: 0, title: 'Revanue', amount: 2_415, rate: -11.4 },
        { id: 1, title: 'Sales', amount: 2_415, rate: -1.4 },
        { id: 3, title: 'Cost', amount: 2_415, rate: +2.4 }
    ])
    return (

        <div className='flex justify-between items-center gap-8'>
            {data.map(item => <FeatureBox key={item.id} {...item}></FeatureBox>)}
        </div>

    )
}
