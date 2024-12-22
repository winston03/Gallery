// import bg from "./assets/img/bg.jpg"
import React, { useEffect, useState } from "react"
import drawing1 from "./assets/img/drawings/card1.jpg"
import drawing2 from "./assets/img/drawings/card2.jpg"
import drawing3 from "./assets/img/drawings/card3.jpg"
import drawing4 from "./assets/img/drawings/card4.jpg"
import { Parallax } from "react-parallax"
import First from "./components/Section/First"
import TextBox from "./components/TextBox/TextBox"
import ComingSoon from "./components/ComingSoon/ComingSoon"
import Preloader from "./components/Preloader/Preloader"
import logo from "../public/Icon.png"
import Card from "./components/kartu/Card.jsx"

const drawings = [drawing1, drawing2, drawing3, drawing4]

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 3 seconds
      setTimeout(() => setIsVisible(false)); // Delay hiding the preloader to allow fade-out
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Preloader isVisible={isVisible} />
      {!isLoading && (
        <div className="">
          <First />
          <TextBox />
          <img src={logo} className="bottom-5 right-5 fixed z-10 w-16 sm:w-9 md:w-12" alt="" />
          <Parallax
            bgImage={drawings[2]}
            blur={{ min: -20, max: 30 }}
            strength={400}
          >
            <div className="flex justify-center mt-10">
              <div className="m-5 space-y-5 columns-4 sm:columns-1 md:columns-2">
                <Card img={drawings[0]} date="Oct 2024" />
                <Card img={drawings[1]} date="Nov 2024" />
                <Card img={drawings[2]} date="Dec 2024" />
                <Card img={drawings[3]} date="Dec 2024" />
                <ComingSoon />
              </div>
            </div>
          </Parallax>
        </div>
      )}

    </>
  )
}

export default App







