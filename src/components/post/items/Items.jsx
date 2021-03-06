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
              <span>{times} ???????????? &#183; <FaLock/></span>
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
                    <span>?????????????????????????????????</span>
                    <p>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                </div>
                </li>
                <div className='line-edit'></div>
                <li onClick={()=>setIsModalEdit(true)}><VscEdit/><span>??????????????????????????????</span></li>
                <li><VscLock/><span>??????????????????????????????????????????????????????</span></li>
                <li><BsBellSlash/><span>????????????????????????????????????????????????????????????????????????????????????????????????</span></li>
                <li><AiOutlineGlobal/><span>???????????????????????????????????????</span></li>
                <li><CgCalendarDates/><span>?????????????????????????????????</span></li>
                <div className='line-edit'></div>
                <li><BiBox/><span>???????????????????????????????????????</span></li>
                <li onClick={()=>deletePostItem(id)}>
                <RiDeleteBin6Line/>
                <div className='edit-detail'>
                    <span>?????????????????????????????????????????????</span>
                    <p>?????????????????????????????????????????????????????????????????????????????????????????????????????? 30 ?????????</p>
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
                    <span>?????????????????????????????????</span>
                    <p>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                </div>
                </li>
                <div className='line-edit'></div>
                <li><span>??????????????????????????????????????????????????????????????????????????????????????????</span></li>
                <div className='line-edit'></div>
                <li>
                <div className='edit-detail'>
                    <span>???????????????????????????</span>
                    <p>???????????????????????????????????????????????????????????????</p>
                </div>
                </li>
                <li>
                <div className='edit-detail'>
                    <span>??????????????????????????? ???????????????????????????????????????????????? 30 ?????????</span>
                    <p>???????????????????????????????????????????????????????????????</p>
                </div>
                </li>
                <li>
                <div className='edit-detail'>
                    <span>??????????????????????????????</span>
                    <p>??????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                </div>
                </li>
                <li>
                <div className='edit-detail'>
                    <span>?????????????????????????????????</span>
                    <p>???????????????????????????????????????????????????????????????????????????</p>
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
                  {userLike ? user + ' ?????????????????????????????? ????????? ' + (likes.length - 1) +' ??????': likes.length}
                </p>
            </>
            : null}
          </div>
          <div className='count-comment'>
          {comments.length > 0 ? <p>{comments.length} ?????????????????????????????????</p> : null }
          </div>
        </div>
        <div className='post-like'>
          <ul>
            <li className={userLike ? 'active' : null} onClick={onClick}><BiLike className='like'/>???????????????</li>
            <li onClick={setInputFocus}><BiMessage className='message'/>?????????????????????????????????????????????</li>
          </ul>
        </div>
        {comments.length > 0 ? comments.map((comment,index)=>{
          return <Comments key={index} comment={comment}/>
        }) : null}
        <div className='post-comment'>
          <img src={Profile}/>
          <input 
          type="text" 
          placeholder='????????????????????????????????????????????????????????????...'
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
