import { useState } from 'react'
import mes from '../sourse/image/mes.svg'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../slice'

export default function SwithTheme(){
    const darkMode = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <div className={darkMode ? "swith-theme dark" : "swith-theme"} onClick={() => {dispatch(increment())}} onTouch>
            <img src={mes} alt="" />
        </div>
    )
}