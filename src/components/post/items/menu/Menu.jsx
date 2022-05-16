import React from 'react'

const Menu = () => {
  return (
    <>
        <ul>
            <li>
            <div className='edit-detail'>
                <span>บันทึกโพสต์</span>
                <p>เพิ่มโพสต์นี้ลงในรายการที่บันทีกไว้ของคุณ</p>
            </div>
            </li>
            <div className='line-edit'></div>
            <li><span>เปิดการแจ้งเตือนสำหรับโพสต์นี้</span></li>
            <div className='line-edit'></div>
            <li>
            <div className='edit-detail'>
                <span>ซ่อนโพสต์</span>
                <p>เห็นโพสต์แบบนี้น้อยลง</p>
            </div>
            </li>
            <li>
            <div className='edit-detail'>
                <span>ซ่อนโพสต์ ชั่วคราวเป็นเวลา 30 วัน</span>
                <p>หยุดเห็นโพสต์ชั่วคราว</p>
            </div>
            </li>
            <li>
            <div className='edit-detail'>
                <span>เลิกติดตาม</span>
                <p>หยุดเห็นโพสต์แต่ยังคงเป็นเพื่อนกัน</p>
            </div>
            </li>
            <li>
            <div className='edit-detail'>
                <span>รายงานโพสต์</span>
                <p>ฉันกังวลเกี่ยวกับโพสต์นี้</p>
            </div>
            </li>
        </ul>
    </>
  )
}

export default Menu