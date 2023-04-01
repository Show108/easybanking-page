import React from 'react'
import online from '../images/icon-online.svg'
import api from '../images/icon-api.svg'
import onboard from '../images/icon-onboarding.svg'
import budget from '../images/icon-budgeting.svg'
import './Secondsection.css'

const Secondsection = () => {
  return (
    <section className='secondsection'>
      <h1>Why choose Easybank?</h1>
      <p>
        We leverage Open Banking to turn your bank account into your financial hub. <br /> Control 
        your finances like never before.
      </p>
      <div className='icons'>
        <span>
          <img src={online} alt='online'></img>
          <h3>Online Banking</h3>
          <p> 
              Our modern web and mobile <br /> applications allow you to keep <br />  track of your finances 
              wherever you <br /> are in the world.
          </p>
        </span>
        <span>
          <img src={budget} alt='budget'></img>
            <h3>Simple Budgetting</h3>
            <p> 
              See exactly where your money <br /> goes each month. Receive<br />  notifications when you’re 
              close to<br />  hitting your limits.
            </p>
        </span>
        <span>
          <img src={api} alt='api'></img>
                <h3>Open API</h3>
                <p> 
                  Manage your savings, investments,<br />  pension, and much more from one <br /> account. Tracking 
                  your money has<br />  never been easier.
                </p>
        </span>
        <span>
          <img src={onboard} alt='onboarding'></img>
              <h3>Fast Onboardinging</h3>
              <p> 
                We don’t do branches. Open your<br />  account in minutes online and start <br /> taking control 
                of your finances<br />  right away.
              </p>
        </span>
      </div>
  </section>
  )
}

export default Secondsection