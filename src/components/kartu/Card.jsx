import React from 'react'

const Card = (props) => {
    const { img, date } = props
    return (
        <div className="group relative overflow-hidden cursor-pointer shadow-2xl flex items-center justify-center">
            <img src={img} alt="" className="cursor-pointer" />
            <div className="absolute top-0 left-0 bg-gradient-to-t transition-all ease-in-out duration-500 group-hover:translate-y-0 translate-y-full flex justify-center items-center w-full h-full from-black/80 to-transparent">
                <p className="text-white font-whisper text-2xl">{date}</p>
            </div>
        </div>
    )
}

export default Card