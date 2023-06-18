import React from 'react'
import NavBar from './NabBar'
import Swal from 'sweetalert2'
export default function CardInfoOn() {
  function fllowing(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'You Fllowing on Instagram '
    })
  }
  return (
    <>
    <NavBar />

    <div className='card_info_on-me'>
    <div class="card-container">
    <span class="pro">PRO</span>
    <img class="round" src="https://my-sity.netlify.app/img/me.jpg" alt="user" />
    <h3>Mukhamadali Adakhamov</h3>
    <h6>Kyrgyzstan,Osh</h6>
    <p>User interface designer and <br/> front-end developer</p>
    <div class="buttons">
      <button class="primary"><a href="https://www.instagram.com/armwx.ll7/">Message</a></button>
      <button class="primary" onClick={fllowing}>Following</button>
    </div>
    <div class="skills">
      <h6>Skills</h6>
      <ul>
        <li>UI / UX</li>
        <li>Front End Development</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
      <li>Git</li>
      <li>Github</li>
      <li>bootstrap</li>

      </ul>
    </div>
  </div>
    </div>
    </>
  )
}
