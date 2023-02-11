import React from 'react'

import { GiPersonInBed } from 'react-icons/gi'
import { FaBath } from 'react-icons/fa'

const PropertyDetails = ({area, rooms, baths}) => {
  return (
    <div className='property-details'>
      <div>{rooms} <GiPersonInBed className='bed-icon' /></div>
      <div>{baths} <FaBath className='bath-icon' /></div>
      <div>{area.toFixed(2)} sqft</div>
    </div>
  )
}

export default PropertyDetails