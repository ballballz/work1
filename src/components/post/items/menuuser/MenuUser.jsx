import React from 'react'
import {VscLock,VscEdit,VscBookmark} from 'react-icons/vsc'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {CgCalendarDates} from 'react-icons/cg'
import {AiOutlineGlobal} from 'react-icons/ai'
import {BsBellSlash} from 'react-icons/bs'
import {BiBox} from 'react-icons/bi'


const MenuUser = ({setIsModalEdit}) => {
  return (
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
            <li>
            <RiDeleteBin6Line/>
            <div className='edit-detail'>
                <span>ย้ายไปที่ถังขยะ</span>
                <p>รายการในถังขยะของคุณจะถูกลบหลังจาก 30 วัน</p>
            </div>
            </li>
        </ul>
    </>
  )
}

export default MenuUser