import React, { useEffect, useState } from 'react'
import './createpost.css'
import {FaLock,FaUserTag} from 'react-icons/fa'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {MdPhotoLibrary} from 'react-icons/md'
import {GoSmiley} from 'react-icons/go'
import {GiMicrophone} from 'react-icons/gi'
import {HiLocationMarker} from 'react-icons/hi'
import Profile from '../../../../images/profile.jpg'


const CreatePost = ({addPost,id}) => {
    const [textPost,setTextPost] = useState("")
    const [disabled,setDisabled] = useState(true)

    const onClick = () =>{
        const data = {
            id: id + 1,
            name : "Ball Ball'",
            image : Profile,
            quote : textPost
        }
        addPost(data)
        setTextPost("")
    }

    const onChange = (e) => {
        setTextPost(e.target.value)
        if(e.target.value !== ""){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }
    return (
        <div className='create-post'>
            <h3>สร้างโพสต์</h3>
            <div className='line'></div>
            <div className='box-create'>
                <div className='user-create'>
                    <img src={Profile}/>
                    <div className='user-profile'>
                        <h4>Ball Ball'</h4>
                        <p><FaLock/>&nbsp;เฉพาะฉัน&nbsp;<AiOutlineCaretDown/></p>
                    </div>
                </div>
                <div className='create-text'>
                    <textarea 
                    cols="50" 
                    rows="5" 
                    placeholder='คุณคิดอะไรอยู่ Ball'
                    onChange={onChange}
                    value={textPost}
                    >
                    </textarea>
                </div>
                <div className='create-op'>
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
                <button 
                className={!disabled ? "create active-create" : "create"}
                onClick={onClick}
                disabled={disabled}
                >
                โพสต์
                </button>
            </div>
        </div>
    )
}

export default CreatePost