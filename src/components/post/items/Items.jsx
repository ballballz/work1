import React from 'react'
import './items.css'
import {Comments} from './comments/Comments'
import {BiMessage,BiLike} from 'react-icons/bi'
import Profile from '../../header/profile.jpg'
import {FaLock} from 'react-icons/fa'


export const Items = () => {
  return (
    <div className='post-items'>
      <div className='item'>
        <div className='control-people'>
          <div className="people-post">
            <img src={Profile} />
            <div>
              <h5>Ball Ball'</h5>
              <span>21 นาที &#183; <FaLock/></span>
            </div>
          </div>
          <div className='post-act'>
            <span>...</span>
          </div>
        </div>
        <div className='post-content'>
          DDDDDD
        </div>
        <div className='post-like'>
          <ul>
            <li><BiLike className='like'/>ถูกใจ</li>
            <li><BiMessage className='message'/>แสดงความคิดเห็น</li>
          </ul>
        </div>
        <Comments />
        <div className='post-comment'>
          <img src={Profile}/>
          <input type="text" placeholder='เขียนแสดงความคิดเห็น...'/>
        </div>
      </div>
    </div>
  )
}
