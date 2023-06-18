import React from 'react'
import { Link } from 'react-router-dom'

export default function NabBar() {
  return (
        <>
        <header className='Togli_nav'>
            <nav className='navBars'>
                <ul>
                <Link to={'/'}>Home</Link>
                    <Link to={'/Info'}>More info</Link>
                    <Link to={'/Job'}>My job</Link>
                </ul>
                <div className='list_icon_time'>
                    <ul>
                    <li><a href='https://www.instagram.com/armwx.ll7/'><img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" /></a></li>
                    <li><a href="https://api.whatsapp.com/send/?phone=996730013&text&type=phone_number&app_absent=0"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png" alt="" /></a></li>
                    <li><a href="https://web.telegram.org/k/"><img src="https://cdn-icons-png.flaticon.com/128/87/87413.png" alt="" /></a></li>
                    </ul>
                </div>
            </nav>
        </header>
        </>
  )
}
