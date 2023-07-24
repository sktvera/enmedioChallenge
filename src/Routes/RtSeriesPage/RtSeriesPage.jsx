import React from 'react'
import SeriesPage from '../../Components/SeriesPage/SeriesPage'
import SeriesTitle from '../../Components/SeriesTitle/SeriesTitle'

const RtSeriesPage = () => {

    return(
        <div style={{ marginTop: '-300px', }}>
            <SeriesTitle/>
            <div style={{  marginLeft:'10%',marginRight:'10%', width:'80%', marginTop:'20px', marginBottom:'80px' }} >
            <SeriesPage/>
            </div>
        
       
        </div>
    )

}

export default RtSeriesPage