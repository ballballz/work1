import React, { useState } from 'react'
import {Items} from './items/Items'
import './post.css'
import Profile from '../header/profile.jpg'
import {MdPhotoLibrary,MdVideoCameraBack} from 'react-icons/md'
import {GoSmiley} from 'react-icons/go'
import CreatePost from './action/create/CreatePost'
import EditPost from './action/edit/EditPost'


export const Post = () => {
  const [isModal,setIsModal] = useState(false)

  return (
    <div className='post-all'>
      <div className="post">
        <div className="control-post">
          <div className='box-post'>
            <img src={Profile}/>
            <button onClick={()=>setIsModal(true)}>คุณคิดอะไรอยู่ Ball</button>
          </div>
          <ul>
            <li><MdVideoCameraBack className="icon-video"/>วิดีโอถ่ายทอดสด</li>
            <li><MdPhotoLibrary className="icon-img"/>รูปภาพ/วิดีโอ</li>
            <li><GoSmiley className="icon-smile"/>ความรู้สึก/กิจกรรม</li>
          </ul>
        </div>
      </div>
      {isModal && <div className='modal'>
        <div className='control-modal'>
          <div className='close' onClick={()=>setIsModal(false)}>&#x2716;</div>
          <CreatePost />
        </div>
      </div>
      }
      <Items />
      <Items />
      <Items />
    </div>
  )
}
