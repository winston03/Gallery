import React from 'react'
import { Parallax } from "react-parallax"
import bg from "../../assets/img/bg.jpg"

const First = () => {
    return (
        <Parallax
            bgImage={bg}
            strength={400}
        >
            <div className="flex justify-center h-screen items-center">
                <div className="relative">
                    <h1 className="text-6xl font-whisper text-white sm:text-4xl md:text-5xl">Winston's gallery</h1>
                    <div className="flex gap-4 w-full items-center justify-center">
                        <hr className="border-white border w-full" />
                        <p className="text-white font-whisper text-xl">2024</p>
                        <hr className="border-white border w-full" />
                    </div>
                </div>
            </div>
        </Parallax>
    )
}

export default First