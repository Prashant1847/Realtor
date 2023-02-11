import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { loadPropertyList, changeFilterValue } from '../../redux/slices/propertyListSlice'

const Filter = ({items, placeholder, index}) => {
    const [value, setValue] = useState(placeholder)

    const dispatch = useDispatch()

    const handleOnChange = (e, index)=>{
        const value = e.target.value 

        if(value === placeholder) dispatch(changeFilterValue({index, value: null}))
        else dispatch(changeFilterValue({index, value}))

        dispatch(loadPropertyList())
        setValue(e.target.value)
    }


    return (
        <div className='filter'>
            <select value={value} onChange={(e) => handleOnChange(e, index)}>
                <option value={placeholder}>{placeholder}</option>
                {items.map(({ name, value }) => <option key={name} value={value}>{name}</option>)}
            </select>
        </div>
    )
}

export default Filter