import React from 'react'
import style2 from './main.css'
import Button from '../Button/Button'

function Main() {
  return (
    <div className='main'>
        <div className='content'>
            <div className='text'>
                <h3>Offordile Divine</h3>
                <h4>Frontend Developer</h4>
                <h5>bruce.website</h5>
            </div>
            <Button />
            <div className='about'>
                <h2>About</h2>
                <p> I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
                    I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>

            <div className='interest'>
                <h2>Interests</h2>
                <p> Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. 
                    Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    </div>
  )
}

export default Main