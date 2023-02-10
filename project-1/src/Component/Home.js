import React from 'react'
import '../Component/home.css'
import icon from '../static/icon.png'
import cover from '../static/cover1.png'

const Home = () => {
  return (
    <div className='home'>
        <div className='content'>
          <img className='icon' src={icon} />
          <div className='info'>
              <p className='heading'>Discover the <a style={{color:'#E23744'}}>Best</a> Food and Drinks</p>
              <p className='about'>Naturally made Healthcare Products for the better care & support of your body.</p>
              <button className='click'>Explore Now!</button>
          </div>
        </div>
        <div className='pic'>
            
            <img className='cover' src={cover} />

        </div>
    </div>
  )
}

export default Home