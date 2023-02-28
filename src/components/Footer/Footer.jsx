import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='icon'>
        <div className='item'>
            <div className='twitter'><i class="fa-brands fa-twitter-square" aria-hidden="true"></i></div>
            <div className='facebook'><i class="fa-brands fa-facebook-square" aria-hidden="true"></i> </div>
            <div className='instagram'><i class="fa-brands fa-instagram" aria-hidden="true"></i> </div>
            <div className='github'><i class="fa-brands fa-github" aria-hidden="true"></i> </div>
        </div>
    </div>
  )
}

export default Footer