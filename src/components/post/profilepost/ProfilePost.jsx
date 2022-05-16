import React from 'react'
import './profilepost.css'
import Profile from '../../../images/profile.jpg'
import {MdPhotoLibrary,MdVideoCameraBack} from 'react-icons/md'
import {GoSmiley} from 'react-icons/go'

const ProfilePost = ({setIsModal}) => {
  return (
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
  )
}

export default ProfilePost