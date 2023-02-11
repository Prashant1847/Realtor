import React from 'react'
import { BounceLoader } from 'react-spinners'

const Loading = ({ title, titleStyles}) => {
  return (
    <div className='loading-container'>
      <BounceLoader size="6.5rem" color="#5bb4d9" cssOverride={{margin: "auto"}}/>
      <div style={titleStyles} className="default-loading-title">{title}</div>
    </div>
  )
}

export default Loading