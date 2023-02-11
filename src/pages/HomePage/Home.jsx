import React, { useEffect } from 'react'

import {PropertyCard, Error, Loading} from '../../components'
import Filters from './Filters'

import { useDispatch, useSelector } from 'react-redux'
import { loadPropertyList } from '../../redux/slices/propertyListSlice'

const Home = () => {
    const { data: propertyList, isLoading, hasError } = useSelector(state => state.propertyList)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(propertyList.length === 0) dispatch(loadPropertyList())
    },[dispatch])

    return (
        <>
            <Filters />

            {hasError && <Error  callBackForRetry={()=> dispatch(loadPropertyList())}/>}

            {isLoading && <Loading  title="Loading Property list"/>}
            
            {(!hasError && !isLoading) && <>
                <section className='property-list-section'>
                    <div className='property-list-heading'>Properties</div>

                    <div className='property-list-container'>
                        {propertyList.map(property => <PropertyCard key={property.externalID} {...property} />)}
                    </div>
                </section>
            </>}
        </>
    )
}

export default Home