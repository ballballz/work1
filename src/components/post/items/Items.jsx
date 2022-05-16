import React, { useState } from 'react'
import './items.css'
import {Comments} from './comments/Comments'
import {BiMessage,BiLike} from 'react-icons/bi'
import Profile from '../../../images/profile.jpg'
import {FaLock} from 'react-icons/fa'
import {AiFillLike} from 'react-icons/ai'


export const Items = ({id,name,image,title,quote}) => {
  const [comments,setComments] = useState([])
  const [likes,setLikes] = useState([])
  const [text,setText] = useState("")

  const onKeyEnter = (e) => {
    if(e.key === 'Enter'){
      setComments((comment)=>{
        return [e.target.value,...comment]
      })
      setText("")
    }
  }
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
          <div className='emoji-comment'>
          {likes.length > 0 ? 
            <>
                <div className='control-emoji'>
                  <AiFillLike className='like-active'/>
                </div>
                <p>Ball Ball'</p>
            </>
            : null}
          </div>
          <div className='count-comment'>
          {comments.length > 0 ? <p>{comments.length} ความคิดเห็น</p> : null }
          </div>
        </div>
        <div className='post-like'>
          <ul>
            <li className={likes.length > 0 ? 'active' : null}><BiLike className='like'/>ถูกใจ</li>
            <li><BiMessage className='message'/>แสดงความคิดเห็น</li>
          </ul>
        </div>
        {comments.length > 0 ? comments.map((comment,index)=>{
          return <Comments key={index} comment={comment}/>
        }) : null}
        <div className='post-comment'>
          <img src={Profile}/>
          <input 
          type="text" 
          placeholder='เขียนแสดงความคิดเห็น...'
          onChange={(e)=>setText(e.target.value)}
          onKeyDown={onKeyEnter}
          value={text}
          />
        </div>
      </div>
    </div>
  )
}
