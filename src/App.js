import { Route, Routes } from 'react-router-dom'

import './assets/global.css'

import Home from './pages/HomePage/Home'
import Details from './pages/propertyDetailsPage/Details'

const App = () => {
    return (
        <>
            <div className='site-title'>Realtor</div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/propertyDetails/:externalID' element={<Details />} />
            </Routes>
        </>
    )
}

export default App