import React from 'react'

const PopUp = ({ isActive, setIsActive, userInfo, setUserId }) => {
    const { name, phone, email, hire_date, position_name, department, address } = userInfo;
    return (
        <div
            onClick={() => {
                setIsActive(false)
                setUserId(0)
            }}
            className={isActive ? 'modal active' : 'modal'}
        >
            <div
                onClick={e => e.stopPropagation()}
                className='pop-up'
            >
                <div
                    onClick={() => {
                        setIsActive(false)
                        setUserId(0)
                    }}
                    className='pop-up__close'>
                    ×
                </div>
                <div className='pop-up__name'>
                    {name}
                </div>
                <div className='pop-up__content'>
                    <div className='pop-up__title'>Телефон:</div>
                    <div className='pop-up__value underlined'>{phone}</div>
                </div>
                <div className='pop-up__content'>
                    <div className='pop-up__title'>Почта:</div>
                    <div className='pop-up__value underlined'>{email}</div>
                </div>
                <div className='pop-up__content'>
                    <div className='pop-up__title'>Дата приема:</div>
                    <div className='pop-up__value'>{hire_date}</div>
                </div>
                <div className='pop-up__content'>
                    <div className='pop-up__title'>Должность:</div>
                    <div className='pop-up__value'>{position_name}</div>
                </div>
                <div className='pop-up__content'>
                    <div className='pop-up__title'>Подразделение:</div>
                    <div className='pop-up__value'>{department}</div>
                </div>
                <div className='pop-up__info'>
                    Дополнительная информация: <div>{address}</div>
                </div>
            </div>
        </div>

    )
}

export default PopUp