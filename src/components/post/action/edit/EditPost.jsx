import React from 'react'
import './editpost.css'
import {FaLock,FaUserTag} from 'react-icons/fa'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {MdPhotoLibrary} from 'react-icons/md'
import {GoSmiley} from 'react-icons/go'
import {GiMicrophone} from 'react-icons/gi'
import {HiLocationMarker} from 'react-icons/hi'
import Profile from '../../../../images/profile.jpg'


const EditPost = () => {
    return (
        <div className='edit-post'>
            <h3>แก้ไขโพสต์</h3>
            <div className='line'></div>
            <div className='box-edit'>
                <div className='user-edit'>
                    <img src={Profile}/>
                    <div className='user-profile-edit'>
                        <h4>Ball Ball'</h4>
                        <p><FaLock/>&nbsp;เฉพาะฉัน&nbsp;<AiOutlineCaretDown/></p>
                    </div>
                </div>
                <div className='edit-text'>
                    <textarea cols="50" rows="5" placeholder='คุณคิดอะไรอยู่ Ball'></textarea>
                </div>
                <div className='edit-op'>
                    <h4>เพิ่มลงในโพสต์ของคุณ</h4>
                    <ul>
                        <li><MdPhotoLibrary/></li>
                        <li><FaUserTag/></li>
                        <li><GoSmiley/></li>
                        <li><HiLocationMarker/></li>
                        <li><GiMicrophone/></li>
                        <li>&#183;&#183;&#183;</li>
                    </ul>
                </div>
                <button className='edit'>โพสต์</button>
            </div>
        </div>
    )
}

export default EditPost