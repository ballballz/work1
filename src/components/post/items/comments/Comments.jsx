import React from 'react'
import {Commentsend} from './sendcomments/Commentsend'
import './comments.css'
import Profile from '../../../header/profile.jpg'

export const Comments = () => {
    return (
        <div className='comment-all'>
            <div className='comment'>
                <div className='comment-img'>
                    <img src={Profile} />
                </div>
                <div className='comment-people'>
                    <h5>Ball Ball'</h5>
                    <p>
                        AAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        AAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        AAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        AAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </p>
                </div>
                <div className='comment-edit'>
                    <h3>...</h3>
                </div>
            </div>
            <div className='comment-like'>
                <ul>
                    <li>ถูกใจ</li>
                    <li>ตอบกลับ</li>
                    <li><span>30 นาที</span></li>
                </ul>
                <Commentsend />
            </div>
        </div>
        
    )
}