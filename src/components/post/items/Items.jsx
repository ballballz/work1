import React, { useState } from 'react'
import './items.css'
import {Comments} from './comments/Comments'
import {BiMessage,BiLike} from 'react-icons/bi'
import Profile from '../../header/profile.jpg'
import {FaLock} from 'react-icons/fa'
import {AiFillLike} from 'react-icons/ai'


export const Items = ({id,name,image,title,quote}) => {
  const [comments,setComment] = useState([])
  const [likes,setLikes] = useState([])
  return (
    <div className='post-items'>
      <div className='item'>
        <div className='control-people'>
          <div className="people-post">
            <img src={image} />
            <div>
              <h4>{name}</h4>
              <span>21 นาที &#183; <FaLock/></span>
            </div>
          </div>
          <div className='post-act'>
            <span>...</span>
          </div>
        </div>
        <div className='post-content'>
          {quote}
        </div>
        <div className='show-comment'>
        {likes.length > 0 ? 
          <div className='emoji-comment'>
            <div className='control-emoji'>
              <AiFillLike className='like-active'/>
            </div>
            <p>Ball Ball'</p>
          </div>
        : null}
          <div className='count-comment'>
          {comments.length > 0 ? <p>{comments.length + 1} ความคิดเห็น</p> : null }
          </div>
        </div>
        <div className='post-like'>
          <ul>
            <li className={likes.length > 0 ? 'active' : null}><BiLike className='like'/>ถูกใจ</li>
            <li><BiMessage className='message'/>แสดงความคิดเห็น</li>
          </ul>
        </div>
        {comments.length > 0 ? <Comments /> : null}
        <div className='post-comment'>
          <img src={Profile}/>
          <input type="text" placeholder='เขียนแสดงความคิดเห็น...'/>
        </div>
      </div>
    </div>
  )
}
