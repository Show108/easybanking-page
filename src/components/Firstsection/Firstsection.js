import React from 'react'
import mockup from '../images/image-mockups 2.png'
import mockupMobile from '../images/image-mockups-mobile.png'
import './Firstsection.css'

const Firstsection = () => {
  return (
    <div>
       <section className='firstsection'>
        <div className='col-1'>
          <h2>Next generation <br /> digital banking</h2>
          <p>
            Take your financial life online. Your Easybank account <br />will be a one-stop-shop 
            for spending, saving, <br />budgeting, investing, and much more.
            <button type='button' className='Button'>Request Invite</button>
          </p> 
          <div className='col-2'>
            <img src={mockup} alt='mockup' className='mockup'></img>
            <img src={mockupMobile} alt='mobile-mockup' className='mockup-mobile'></img>
         </div>
        </div>
        
      </section>
    </div>
  )
}

export default Firstsection