import React from 'react'
import pic from '../Image/Bruce.jpg'
import style from './header.css'

function Header() {
  return (
    <div className='image'>
        <img src={pic} />
    </div>
  )
}

export default Header