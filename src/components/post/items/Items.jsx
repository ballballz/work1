import React, { useEffect, useState ,useRef} from 'react'
import './items.css'
import {Comments} from './comments/Comments'
import {VscLock,VscEdit,VscBookmark} from 'react-icons/vsc'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {CgCalendarDates} from 'react-icons/cg'
import {BsBellSlash} from 'react-icons/bs'
import {BiMessage,BiLike,BiBox} from 'react-icons/bi'
import Profile from '../../../images/profile.jpg'
import {FaLock} from 'react-icons/fa'
import {AiFillLike,AiOutlineGlobal} from 'react-icons/ai'
import EditPost from './edit/EditPost'



const arr = ["John","Marin"]

export const Items = ({id,name,image,title,quote,time,index,editPostItem,deletePostItem}) => {
  const [comments,setComments] = useState([])
  const [menuItem,setMenuItem] = useState(false)
  const [likes,setLikes] = useState(arr)
  const [text,setText] = useState("")
  const [user,setUser] = useState("Ball Ball'")
  const [userLike,setUserLike] = useState(false)
  const [isModalEdit,setIsModalEdit] = useState(false)
  const [times,setTimes] = useState(Number(time))

  const useFocus = () => {
    const txtCheck = useRef(null)
    const setFocus = () => {txtCheck.current &&  txtCheck.current.focus()}

    return [ txtCheck, setFocus ] 
}

const [inputFocus,setInputFocus] = useFocus()


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
  const displayHello = () => {
    const newTime = times + 1
    setTimes(newTime)
  }
  setInterval(displayHello, 60000);

  return (
    <div className='post-items'>
      <div className='item'>
        <div className='control-people'>
          <div className="people-post">
            <img src={image} />
            <div>
              <h4>{name}</h4>
              <span>{times} นาที &#183; <FaLock/></span>
            </div>
          </div>
          <div className='post-act' onClick={()=>setMenuItem(!menuItem)}>
            <span>&#183;&#183;&#183;</span>
            {menuItem && name === user && 
            <>
              <ul>
                <li>
                <VscBookmark/>
                <div className='edit-detail'>
                    <span>บันทึกโพสต์</span>
                    <p>เพิ่มโพสต์นี้ลงในรายการที่บันทีกไว้ของคุณ</p>
                </div>
                </li>
                <div className='line-edit'></div>
                <li onClick={()=>setIsModalEdit(true)}><VscEdit/><span>แก้ไขโพสต์</span></li>
                <li><VscLock/><span>แก้ไขกลุ่มเป้าหมาย</span></li>
                <li><BsBellSlash/><span>ปิดการแจ้งเตือนเกี่ยวกับโพสต์นี้</span></li>
                <li><AiOutlineGlobal/><span>ปิดการแปลภาษา</span></li>
                <li><CgCalendarDates/><span>แก้ไขวันที่</span></li>
                <div className='line-edit'></div>
                <li><BiBox/><span>ย้ายไปที่คลัง</span></li>
                <li onClick={()=>deletePostItem(id)}>
                <RiDeleteBin6Line/>
                <div className='edit-detail'>
                    <span>ย้ายไปที่ถังขยะ</span>
                    <p>รายการในถังขยะของคุณจะถูกลบหลังจาก 30 วัน</p>
                </div>
                </li>
              </ul>
            </>
            } 
            {menuItem && name !== user && 
            <>
              <ul>
                <li>
                <div className='edit-detail'>
                    <span>บันทึกโพสต์</span>
                    <p>เพิ่มโพสต์นี้ลงในรายการที่บันทีกไว้ของคุณ</p>
                </div>
                </li>
                <div className='line-edit'></div>
                <li><span>เปิดการแจ้งเตือนสำหรับโพสต์นี้</span></li>
                <div className='line-edit'></div>
                <li>
                <div className='edit-detail'>
                    <span>ซ่อนโพสต์</span>
                    <p>เห็นโพสต์แบบนี้น้อยลง</p>
                </div>
                </li>
                <li>
                <div className='edit-detail'>
                    <span>ซ่อนโพสต์ ชั่วคราวเป็นเวลา 30 วัน</span>
                    <p>หยุดเห็นโพสต์ชั่วคราว</p>
                </div>
                </li>
                <li>
                <div className='edit-detail'>
                    <span>เลิกติดตาม</span>
                    <p>หยุดเห็นโพสต์แต่ยังคงเป็นเพื่อนกัน</p>
                </div>
                </li>
                <li>
                <div className='edit-detail'>
                    <span>รายงานโพสต์</span>
                    <p>ฉันกังวลเกี่ยวกับโพสต์นี้</p>
                </div>
                </li>
              </ul>
            </>
            }
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
                <p>  
                  {userLike ? user + ' และคนอื่นๆ อีก ' + (likes.length - 1) +' คน': likes.length}
                </p>
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
            <li onClick={setInputFocus}><BiMessage className='message'/>แสดงความคิดเห็น</li>
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
          ref={inputFocus}
          />
        </div>
      </div>
      {isModalEdit && name === user &&
      <div className='modal-edit'>
        <div className='control-modal-edit'>
          <div className='close-edit' onClick={()=>setIsModalEdit(false)}>&#x2716;</div>
          <EditPost quote={quote} editItem={editPostItem} id={id} isModalEdit={setIsModalEdit}/>
        </div>
      </div>
      }
    </div>
  )
}
