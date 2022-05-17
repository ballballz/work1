import React, { useEffect, useState } from 'react'
import './items.css'
import {Comments} from './comments/Comments'
import {BiMessage,BiLike,BiBox} from 'react-icons/bi'
import Profile from '../../../images/profile.jpg'
import {FaLock} from 'react-icons/fa'
import {AiFillLike} from 'react-icons/ai'
import EditPost from './edit/EditPost'
import MenuUser from './menuuser/MenuUser'
import Menu from './menu/Menu'



const arr = ["John","Marin"]

export const Items = ({id,name,image,title,quote,time,index}) => {
  const [comments,setComments] = useState([])
  const [menuItem,setMenuItem] = useState(false)
  const [likes,setLikes] = useState(arr)
  const [text,setText] = useState("")
  const [user,setUser] = useState("Ball Ball'")
  const [userLike,setUserLike] = useState(false)
  const [isModalEdit,setIsModalEdit] = useState(false)
  const [editQuote,setEditQuote] = useState("")

  const onKeyEnter = (e) => {
    if(e.key === 'Enter'){
      setComments((comment)=>{
        return [e.target.value,...comment]
      })
      setText("")
    }
  }

  const onClick = () => {
    setUserLike(!userLike)

    if(!userLike){
      setLikes((likes)=>{
        return  [user,...likes]
      })
    }else{
      setLikes((likes)=>{
        const check = likes.filter((check)=>check !== user)
        return check
      })
    }
  }

  const editQuoteItem = (txt) => {
    setEditQuote(txt)
    setIsModalEdit(false)
  }

  return (
    <div className='post-items'>
      <div className='item'>
        <div className='control-people'>
          <div className="people-post">
            <img src={image} />
            <div>
              <h4>{name}</h4>
              <span>{time} &#183; <FaLock/></span>
            </div>
          </div>
          <div className='post-act' onClick={()=>setMenuItem(!menuItem)}>
            <span>&#183;&#183;&#183;</span>
            {menuItem && name === user && <MenuUser setIsModalEdit={setIsModalEdit}/>}
            {menuItem && name !== user && <Menu />}
          </div>
        </div>
        <div className='post-content'>
          {editQuote === "" ? quote : editQuote}
        </div>
        <div className='show-comment'>
          <div className='emoji-comment'>
          {likes.length > 0 ? 
            <>
                <div className='control-emoji'>
                  <AiFillLike className='like-active'/>
                </div>
                <p>{userLike ? user + ' และคนอื่นๆ อีก ' + (likes.length - 1) +' คน': likes.length}  </p>
            </>
            : null}
          </div>
          <div className='count-comment'>
          {comments.length > 0 ? <p>{comments.length} ความคิดเห็น</p> : null }
          </div>
        </div>
        <div className='post-like'>
          <ul>
            <li className={userLike ? 'active' : null} onClick={onClick}><BiLike className='like'/>ถูกใจ</li>
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
      {isModalEdit && name === user &&
      <div className='modal-edit'>
        <div className='control-modal-edit'>
          <div className='close-edit' onClick={()=>setIsModalEdit(false)}>&#x2716;</div>
          <EditPost quote={quote} editItem={editQuoteItem}/>
        </div>
      </div>
      }
    </div>
  )
}
