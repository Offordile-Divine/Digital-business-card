import React from 'react'
import style3 from './button.css'

function Button() {
  return (
    <div className='btn'>
        <div className='email'>
            <button><i class="fa fa-envelope" aria-hidden="true"></i>  Email</button>
        </div>
        <div className='linkedin'>
            <button><i class="fa-brands fa-linkedin" aria-hidden="true"></i> Linkedin</button>
        </div>
    </div>
  )
}

export default Button