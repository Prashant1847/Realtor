import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { filterData } from '../../data/filter'
import {setIntialFilters} from '../../redux/slices/propertyListSlice'
import Filter from './Filter'

const Filters = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setIntialFilters(filterData))
    },[dispatch])

    return (
        <div className='filters-container'>
            <div className="filters-heading">Search Propery By Filters</div>
            <div className='filters'>
                {filterData &&  filterData.map((data, index) => <Filter key={data.queryName} index={index} {...data}/>)}
            </div>
        </div>
    )
}

export default Filters