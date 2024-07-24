import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='topFooter'>
        <div className='footerLeft'>
          <h1>FarhanH</h1>
          <p>
            I'm a passionate front-end web developer. I craft engaging and
            visually stunning websites that bring ideas to life on the digital
            canvas.
          </p>
        </div>
        <div className='footerRight'>
          <div className='inputBox'>
            <input type='email' placeholder='Enter Your Email' />
          </div>
          <div className='footerSubscribe'>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className='bottomFooter'>
        <p>© 2024 Farhan Hashmi. All rights reserved.</p>
        <div className='privacyDetails'>
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}
export default Footer
