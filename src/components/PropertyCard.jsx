import React from 'react'

import imgNotAvailable from '../assets/imgNotAvailable.png'
import {PropertyDetails, PropertyHeading, PropertyFeatures} from './'
import { useNavigate } from 'react-router-dom'

const PropertyCard = (data) => {
    const { price, title, externalID, rooms, baths, area, isVerified, coverPhoto, agencyLogo } = data
    const navigate = useNavigate()

    const handleCardClick = ()=>{
        navigate(`/propertyDetails/${externalID}`)
    }

    return (
        <div className='property-card' onClick={handleCardClick}>
            <img src={coverPhoto ? coverPhoto: imgNotAvailable} alt="" className={`property-img ${!coverPhoto ? 'img-not-available': ''}`} />
            <PropertyHeading agencyLogo={agencyLogo} isVerified={isVerified} price={price} />
            <PropertyDetails area={area} rooms={rooms} baths={baths} />
            <PropertyFeatures title={title} />
        </div>

    )
}

export default PropertyCard