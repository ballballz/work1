import React from 'react'
import './messengers.css'
import Profile from '../../images/profile.jpg'
import {RiVideoAddFill} from 'react-icons/ri'
import {BiSearch} from 'react-icons/bi'

const Messengers = () => {
    return(
        <div className='messenger'>
            <div className='message-head'>
                <h4>ผู้ติดต่อ</h4>
                <ul>
                    <li><RiVideoAddFill/></li>
                    <li><BiSearch/></li>
                    <li>&#183;&#183;&#183;</li>
                </ul>
            </div>
            <div className='list-friend'>
                <ul>
                    <li><img src={Profile}/><span>Kew Nattakorn</span></li>
                    <li><img src={Profile}/><span>Patipat Choochuen</span></li>
                    <li><img src={Profile}/><span>DO RK</span></li>
                    <li><img src={Profile}/><span>Aof Eakasit</span></li>
                    <li><img src={Profile}/><span>Nuttasin Vuttiya</span></li>
                    <li><img src={Profile}/><span>Beer Weeriyakul</span></li>
                    <li><img src={Profile}/><span>Bell Weeriyakul</span></li>
                    <li><img src={Profile}/><span>Endea Vor</span></li>
                    <li><img src={Profile}/><span>Auau Ontheways</span></li>
                    <li><img src={Profile}/><span>Pram Hamalaphoto</span></li>
                    <li><img src={Profile}/><span>Chayodom Tpl</span></li>
                    <li><img src={Profile}/><span>Pok Pingping</span></li>
                    <li><img src={Profile}/><span>Guiy Golden Beard</span></li>
                    <li><img src={Profile}/><span>Patipol Tupkong</span></li>
                    <li><img src={Profile}/><span>Kew Nattakorn</span></li>
                    <li><img src={Profile}/><span>Patipat Choochuen</span></li>
                    <li><img src={Profile}/><span>DO RK</span></li>
                    <li><img src={Profile}/><span>Aof Eakasit</span></li>
                    <li><img src={Profile}/><span>Nuttasin Vuttiya</span></li>
                    <li><img src={Profile}/><span>Beer Weeriyakul</span></li>
                    <li><img src={Profile}/><span>Bell Weeriyakul</span></li>
                    <li><img src={Profile}/><span>Endea Vor</span></li>
                    <li><img src={Profile}/><span>Auau Ontheways</span></li>
                    <li><img src={Profile}/><span>Pram Hamalaphoto</span></li>
                    <li><img src={Profile}/><span>Chayodom Tpl</span></li>
                    <li><img src={Profile}/><span>Pok Pingping</span></li>
                    <li><img src={Profile}/><span>Guiy Golden Beard</span></li>
                    <li><img src={Profile}/><span>Patipol Tupkong</span></li>      
                </ul>
            </div>
        </div>
    )
}

export default Messengers