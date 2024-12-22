import React from 'react'
import img from "../../assets/img/drawings/card3.jpg"

const ComingSoon = () => {
    return (
        <div className="flex cursor-pointer justify-center bg-[#f5f5dc] items-center">
            <img src={img} className="invisible" alt="" />
            <p className="text-black font-whisper absolute text-2xl">Coming Soon</p>
        </div>
    )
}

export default ComingSoon