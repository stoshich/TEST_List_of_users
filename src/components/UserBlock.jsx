import React from 'react'
import phoneImg from '../assets/smartphone-icon.png'
import mailImg from '../assets/mail-icon.png'

const UserBlock = ({ setIsActive, setUserId, id, name, phoneNumber, mail }) => {
    return (
        <div onClick={() => {
            setIsActive(true)
            setUserId(id)
        }} className='user-block'>
            <div className='user-block__title'>
                {name}
            </div>
            <div className='user-block__number'>
                <img className='user-block__icon' src={phoneImg} alt="" />
                {phoneNumber}
            </div>
            <div className='user-block__mail'>
                <img className='user-block__icon' src={mailImg} alt="" />
                {mail}
            </div>
        </div>
    )
}

export default UserBlock