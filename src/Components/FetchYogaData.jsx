import React from 'react';
import UseFetch from './UseFetch'
import './FetchingData.css'

const FetchYogaData = () =>{
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);

    return(
        <>
        <h1 className='usefetch_heading'>Use Fetch Custom Hook II</h1> 
        <ul className='list_data_main'>
        {data && data.map((e)=>( 
        <>
        <li className='list_data'>
                <h3>{e.name}</h3>
                <p><strong>The Benefits: </strong>{e.benefits}</p>
                <p><strong>Practice Duration: </strong>{e.time_duration}</p>
        </li>
        </>

        ))}
        
        
        </ul>
        
        </>
    )
}
export default FetchYogaData