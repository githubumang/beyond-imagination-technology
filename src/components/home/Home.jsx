import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className='option'>
            <div className='link'>
            <Link to={'./'} style={{textDecoration:"none", color:"blue"}}>DASHBOARD</Link>
            </div>
        </div>
        <div className='content'>
            <Dashboard/>
        </div>

    </div>
  )
}

export default Home