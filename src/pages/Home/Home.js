import React from 'react'
import bgHome from '../../assets/images/bg-main.avif'
import "./home.css"
const Home = () => {
  return (
    <>
      <div className='home-container'>

        <div className='bg-home'>
          <img className='img-home' src={bgHome} alt="Logo" />
        </div>

        <div className="bg-text">
          <h1>Invest Your Amount With Our Project</h1>
          <div className="bg-numbers">
            <div className="pledged"><h3>$45,398</h3><p>Pledged</p></div>
            <div className="target"><h3>$21,765</h3><p>Target</p></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home