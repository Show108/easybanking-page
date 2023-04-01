import React from 'react'
import './Thirdsection.css'
import currency from '../images/image-currency.jpg'
import confetti from '../images/image-confetti.jpg'
import plane from '../images/image-plane.jpg'
import restuarant from '../images/image-restaurant.jpg'
const Thirdsection = () => {
  return (
    
    <section className='thirdsection'>
    <h2>Lastest Article</h2>
    <div className='article'>
      <span>
          <img src={currency} alt='currency' className='currency'></img>
          <h4> By Claire Robertson</h4>
          <h5>Receive money in any <br />currency with no fees</h5>
          <p>  
              The world is getting smaller and<br /> we’re becoming more mobile. So <br />why should you be 
              forced to only<br /> receive money in a single …
          </p>
      </span>
      <span>
          <img src={restuarant} alt='restaurant'></img>
          <h4>By Wilson Hutton</h4>
          <h5>Treat yourself without <br />worrying about money</h5>
          <p>
            Our simple budgeting feature<br /> allows you to separate out your<br /> spending and set 
            realistic limits<br /> each month. That means you …
          </p>
      </span>
      <span>
          <img src={plane} alt='plane'></img>
          <h4>By Wilson Hutton</h4>
          <h5>Take your Easybank card <br />wherever you go</h5>
          <p>
          We want you to enjoy your travels.<br /> This is why we don’t charge any<br /> fees on purchases 
          while you’re<br /> abroad. We’ll even show you …
          </p>
      </span>
      <span>
          <img src={confetti} alt='confetti'></img>
          <h4>By Claire Robinson</h4>
          <h5>
            Our invite-only Beta <br />accounts are now live!</h5>
          <p>
            After a lot of hard work by the<br /> whole team, we’re excited to launch<br /> our closed beta. 
            It’s easy to request<br /> an invite through the site ...
          </p>
      </span>
    </div>
  </section>
  )
}

export default Thirdsection