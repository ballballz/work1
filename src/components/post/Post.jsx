import React from 'react'
import {Items} from './items/Items'
import './post.css'
import Profile from '../header/profile.jpg'
import {MdPhotoLibrary,MdVideoCameraBack} from 'react-icons/md'
import {GoSmiley} from 'react-icons/go'


export const Post = () => {
  return (
    <div className='post-all'>
      <div className="post">
        <div className="control-post">
          <div className='box-post'>
            <img src={Profile}/>
            <button>คุณคิดอะไรอยู่ Ball</button>
          </div>
          <ul>
            <li><MdVideoCameraBack className="icon-video"/>วิดีโอถ่ายทอดสด</li>
            <li><MdPhotoLibrary className="icon-img"/>รูปภาพ/วิดีโอ</li>
            <li><GoSmiley className="icon-smile"/>ความรู้สึก/กิจกรรม</li>
          </ul>
        </div>
      </div>
      <Items />
    </div>
  )
}
