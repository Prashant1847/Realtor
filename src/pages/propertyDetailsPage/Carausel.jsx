import { useEffect, useRef, useState } from 'react'

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

const Carausel = ({imgUrls}) => {
    const [imagesNodes, setImagesNodes] = useState([])
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const carausel = useRef()

    useEffect(()=>{
        setImagesNodes(Array.from(carausel.current.querySelectorAll('img')))
    },[])

    const handleLeftClick = ()=>{
        const pervIndex = currentSlideIndex - 1
        if(pervIndex < 0) return

        imagesNodes[pervIndex].scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"});
        setCurrentSlideIndex(pervIndex)
    }

    
    const handleRightClick = ()=>{
        const nextIndex = currentSlideIndex + 1
        if(nextIndex > imagesNodes.length-1) return

        imagesNodes[nextIndex].scrollIntoView({behavior: "smooth", block: "nearest", inline: "end"});
        setCurrentSlideIndex(nextIndex)
    }

    return (
        <div className='carausel-container'>
            {imgUrls.length > 1 &&  <BiLeftArrowAlt className='left-icon' onClick={handleLeftClick}/>}
            <div className='carausel' ref={carausel}>

                {imgUrls &&  imgUrls.map((url,index) => {
                    if(url) return <img key={index} alt="" src={url}/>
                    return null
                })}

            </div>
            {imgUrls.length > 1 && <BiRightArrowAlt className='right-icon' onClick={handleRightClick} />}
        </div>
    )
}

export default Carausel