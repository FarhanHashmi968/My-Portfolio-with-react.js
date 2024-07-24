import './Contact.css'
import emailLogo from '../../images/emailLogo.svg'
import locationImage from '../../images/locationImage.svg'
import phoneImage from '../../images/phoneImage.svg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append('access_key', 'b8351b81-c478-46e7-82ad-9f3aa84c7373')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json())

    if (res.success) {
      console.log('Success', res)
      alert(res.message)
    }
  }
  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={emailLogo} alt='' />
              <p>mdfarhan968@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={phoneImage} alt='' />
              <p>+91 7562886544</p>
            </div>
            <div className='contact-detail'>
              <img src={locationImage} alt='' />
              <p>JH, India</p>
            </div>
          </div>
        </div>
        <form className='contact-right' onSubmit={onSubmit}>
          <label htmlFor=''>Your Name</label>
          <input type='text' id='' placeholder='Enter Your Name' name='name' />
          <label htmlFor=''>Your Email</label>
          <input
            type='email'
            id=''
            placeholder='Enter Your Email'
            name='email'
          />
          <label htmlFor=''>Write your message here</label>
          <textarea
            name='message'
            id=''
            rows='8'
            placeholder='Enter your messgae'
          ></textarea>
          <button type='submit' className='contact-submit'>
            Submit Now
          </button>
        </form>
      </div>
    </div>
  )
}
export default Contact
