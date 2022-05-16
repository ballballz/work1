import React, { useState } from 'react'
import {Commentsend} from './sendcomments/Commentsend'
import './comments.css'
import Profile from '../../../../images/profile.jpg'

export const Comments = ({comment}) => {
    const [isOpen,setIsOpen] = useState(false)

    return (
        <div className='comment-all'>
            <div className='comment'>
                <div className='comment-img'>
                    <img src={Profile} />
                </div>
                <div className='comment-people'>
                    <h5>Ball Ball'</h5>
                    <p>
                        {comment}
                    </p>
                </div>
                <div className='comment-edit'>
                    <h3>...</h3>
                </div>
            </div>
            <div className='comment-like'>
                <ul>
                    <li>ถูกใจ</li>
                    <li onClick={()=>setIsOpen(true)}>ตอบกลับ</li>
                    <li><span>30 นาที</span></li>
                </ul>
                {isOpen && <Commentsend />}
            </div>
        </div>
        
    )
}