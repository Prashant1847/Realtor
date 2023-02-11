import React from 'react'

import {TiTick} from 'react-icons/ti'

const PropertyHeading = ({isVerified, agencyLogo, price}) => {
    return (
        <div className='property-heading'>
            <span>
                {isVerified && <TiTick className='verified-icon' />}
                <span className='property-title'>AED {price}</span>
            </span>
            {agencyLogo && <img src={agencyLogo} alt="" className='property-dealer-icon' />}
        </div>
    )
}

export default PropertyHeading