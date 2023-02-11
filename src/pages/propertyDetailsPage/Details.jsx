import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {PropertyDetails, PropertyHeading, PropertyFeatures, Error, Loading} from '../../components'

import { loadPropertyDetails } from '../../redux/slices/propertyDetailsSlice'
import Carausel from './Carausel'

const Details = () => {
    const { externalID } = useParams()
    const { data: propertyDetails, isLoading, hasError } = useSelector(state => state.propertyDetails)

    const dispatch = useDispatch()

    useEffect(() => {
        if(externalID) dispatch(loadPropertyDetails(externalID))
    }, [dispatch, externalID])
    
    if(!externalID) return <Error title='Sorry!! property details not available'/>

    const { price, description, rooms, baths, area, title, isVerified, imageUrls, facilities, agencyLogo } = propertyDetails
    return (
        <section className='property-details-section'>
            {hasError && <Error callBackForRetry={()=> dispatch(loadPropertyDetails(externalID))}/>}
            
            {isLoading && <Loading title="Loading Property Details" />}

            {(!hasError && !isLoading) && <>
                <Carausel imgUrls={imageUrls} />

                <PropertyHeading isVerified={isVerified} agencyLogo={agencyLogo} price={price} />
                <PropertyDetails area={area} rooms={rooms} baths={baths} />
                <PropertyFeatures title={title} extraClasses="property-details-heading" />

                <div className='property-details-description'>{description}</div>

                <div className=' property-details-heading'>Facilites:</div>
                <div className='facilities-container'>
                    {facilities &&  facilities.map((facility, index) => <div className='facility' key={index}>{facility}</div>)}
                </div>
            </>}
        </section>
    )
}

export default Details





