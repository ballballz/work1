import React from 'react'
import './commentsend.css'
import Profile from '../../../../header/profile.jpg'

export const Commentsend = () => {
  return (
    <div className='comment-send'>
        <img src={Profile}/>
        <input type='text' placeholder='เขียนข้อความตอบกลับ...' />
    </div>
  )
}
