import React from 'react'
import './profile.css'
import abgame from '../../images/abgame.png'
import ads from '../../images/ads.png'
import adsall from '../../images/adsall.png'
import fav from '../../images/fav.png'
import covid from '../../images/covid.png'
import fbpay from '../../images/fbpay.png'
import friend from '../../images/friend.png'
import game from '../../images/game.png'
import graph from '../../images/graph.png'
import group from '../../images/group.png'
import live from '../../images/live.png'
import helpgroup from '../../images/helpgroup.png'
import lives from '../../images/lives.png'
import market from '../../images/market.png'
import messenger from '../../images/messenger.png'
import messengerkids from '../../images/messengerkids.png'
import page from '../../images/page.png'
import quest from '../../images/quest.png'
import save from '../../images/save.png'
import watch from '../../images/watch.png'
import wheater from '../../images/wheater.png'
import wheaterall from '../../images/wheaterall.png'
import work from '../../images/work.png'
import flower from '../../images/flower.png'
import clock from '../../images/clock.png'
import profile from '../../images/profile.jpg'




const Profile = () => {
    return (
        <div className='control-profile'>
            <ul>
                <li><img src={profile}/><span>Ball Ball'</span></li>
                <li><img src={friend}/><span>เพื่อน</span></li>
                <li><img src={group}/><span>กลุ่ม</span></li>
                <li><img src={market}/><span>Marketplace</span></li>
                <li><img src={watch}/><span>Watch</span></li>
                <li><img src={clock}/><span>ความทรงจำ</span></li>
                <li><img src={helpgroup}/><span>การช่วยเหลือสำหรับชุมชน</span></li>
                <li><img src={ads}/><span>กิจกรรมโฆษณาล่าสุด</span></li>
                <li><img src={quest}/><span>โครงการระดมทุน</span></li>
                <li><img src={covid}/><span>โควิด-19: ศูนย์ข้อมูล</span></li>
                <li><img src={work}/><span>งานกิจกรรม</span></li>
                <li><img src={graph}/><span>ตัวจัดการโฆษณา</span></li>
                <li><img src={save}/><span>ที่บันทึกไว้</span></li>
                <li><img src={page}/><span>เพจ</span></li>
                <li><img src={fav}/><span>รายการโปรด</span></li>
                <li><img src={live}/><span>ล่าสุด</span></li>
                <li><img src={game}/><span>เล่นเกม</span></li>
                <li><img src={abgame}/><span>วิดีโอเกี่ยวกับเกม</span></li>
                <li><img src={lives}/><span>วิดีโอถ่ายทอดสด</span></li>
                <li><img src={adsall}/><span>ศูนย์โฆษณา</span></li>
                <li><img src={wheaterall}/><span>ศูนย์ภูมิอากาศ</span></li>
                <li><img src={wheater}/><span>สภาพอากาศ</span></li>
                <li><img src={flower}/><span>สุขภาพทางอารามณ์</span></li>
                <li><img src={fbpay}/><span>Facebook Pay</span></li>
                <li><img src={messenger}/><span>Messenger</span></li>
                <li><img src={messengerkids}/><span>Messenger Kids</span></li>
            </ul>
        </div>
    )
}

export default Profile