import React from 'react'
import bg from "../../assets/img/bg.jpg"

const Preloader = ({ isVisible }) => {
    return (
        <div className={`fixed inset-0 flex items-center transition-opacity duration-1000 justify-center bg-black/20 z-50 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div style={{ backgroundImage: `url(${bg})` }} className="h-screen w-full fixed top-0 left-0 bg-covers blur-lg"></div>

            <div className="w-32 h-32 z-10 sm:w-24 sm:h-24 md:w-28 md:h-28 relative">
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><radialGradient id='a6' cx='.66' fx='.66' cy='.3125' fy='.3125' gradientTransform='scale(1.5)'><stop offset='0' stop-color='#FFFFFF'></stop><stop offset='.3' stop-color='#FFFFFF' stop-opacity='.9'></stop><stop offset='.6' stop-color='#FFFFFF' stop-opacity='.6'></stop><stop offset='.8' stop-color='#FFFFFF' stop-opacity='.3'></stop><stop offset='1' stop-color='#FFFFFF' stop-opacity='0'></stop></radialGradient><circle transform-origin='center' fill='none' stroke='url(#a6)' stroke-width='2' stroke-linecap='round' stroke-dasharray='200 1000' stroke-dashoffset='0' cx='100' cy='100' r='70'><animateTransform type='rotate' attributeName='transform' calcMode='spline' dur='1.5' values='360;0' keyTimes='0;1' keySplines='0 0 1 1' repeatCount='indefinite'></animateTransform></circle><circle transform-origin='center' fill='none' opacity='.2' stroke='#FFFFFF' stroke-width='2' stroke-linecap='round' cx='100' cy='100' r='70'></circle></svg>
            </div>
        </div>
    )
}

export default Preloader

