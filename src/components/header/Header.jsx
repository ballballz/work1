import React from 'react'
import './header.css'
import {FaFacebook,FaFacebookMessenger,FaBell} from 'react-icons/fa'
import {AiOutlineYoutube,AiOutlineHome,AiFillCaretDown} from 'react-icons/ai'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {CgMenuGridR} from 'react-icons/cg'
import {RiStore2Line,RiLayoutMasonryLine} from 'react-icons/ri'
import Profile from './profile.jpg'



export const Header = () => {
  return (
    <div className='header'>
        <div className='box1'>
            <div className='logo'><FaFacebook/></div>
            <input type="text" placeholder="ค้นหาบน Facebook:" />
        </div>
        <div className='box2'>
            <ul>
                <li className='active'><AiOutlineHome/></li>
                <li><AiOutlineYoutube/></li>
                <li><RiStore2Line/></li>
                <li><HiOutlineUserGroup/></li>
                <li><RiLayoutMasonryLine/></li>
            </ul>
        </div>
        <div className='box3'>
            <ul>
                <li className='profile'><img src={Profile} />Ball</li>
                <li><CgMenuGridR/></li>
                <li><FaFacebookMessenger/></li>
                <li><FaBell /></li>
                <li><AiFillCaretDown/></li>
            </ul>
        </div>
    </div>
  )
}
