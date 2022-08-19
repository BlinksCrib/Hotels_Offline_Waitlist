import React, { useEffect, useRef, useState } from 'react';
import './Nav.css';
import img1 from '../assets/Jadsonbgremoved1.png'
import img2 from '../assets/Rectangle1.png';
import img3 from '../assets/Arrow1.png';

const Nav = () => {
    const [timerDays, setTimerDays] = useState("00")
    const [timerHour, setTimerHour] = useState("00")
    const [timerMinutes, setTimerMinutes] = useState("00")
    const [timerSeconds, setTimerSeconds] = useState("00")

    let interval = useRef();

    const startTimer = () =>{
        const countdownDate = new Date("September 17, 2022 00:00:00").getTime();

        interval = setInterval(() =>{
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 *60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                console.log('hello');
            }else{
                setTimerDays(days);
                setTimerHour(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
      startTimer()
    })
    
  return (
    <div className='parentCont'>
      <div className='childCont'>
        <div className='subCont'>
          <div className='content1'>
            <div className='child-content1'>
              <div className='logo'>
                <img src={img1} alt='logo' />
              </div>
              <div>
                <div className='arrow'>
                  <img src={img3} alt='approved' />
                  <h3>We’re</h3>
                </div>
                <div>
                  <h3>launching soon!</h3>
                </div>
              </div>
              <div className='time-count'>
                <div className='timeDays time'>
                  <h2>{timerDays}</h2>
                  <p>days</p>
                </div>
                <span>:</span>
                <div className='timeHour time'>
                  <h2>{timerHour}</h2>
                  <p>Hour</p>
                </div>
                <span>:</span>
                <div className='timeMinutes time'>
                  <h2>{timerMinutes}</h2>
                  <p>Minutes</p>
                </div>
                <span>:</span>
                <div className='timeSeconds time'>
                  <h2>{timerSeconds}</h2>
                  <p>Seconds</p>
                </div>
              </div>
              <div className='Jason'>
                <p>
                  At{' '}
                  <span className='green'>
                    Jadson Integrated Farms and services ltd.
                  </span>{' '}
                  our major business is Agriculture, food production as well as
                  Farm support and/or consultancy Services that will meet the
                  expectations of our clients.
                </p>
              </div>
              <div className='icons'>
                <div className='icon'>
                  <i class='fa-brands fa-facebook-f'></i>
                </div>
                <div className='icon'>
                  <i class='fa-brands fa-twitter'></i>
                </div>
                <div className='icon'>
                  <i class='fa-brands fa-youtube'></i>
                </div>
                <div className='icon'>
                  <i class='fab fa-instagram-square'></i>
                </div>
                <div className='icon'>
                  <i class='fa-brands fa-linkedin-in'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='content2'>
            <img src={img2} alt='approved' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
