import React from 'react'

const PropertyFeatures = ({extraClasses, title}) => {
    return (
        <div className={`property-features ${extraClasses}`}>{title}</div>
    )
}

export default PropertyFeatures