import './Home.css'
import myImage1 from '../../images/My Portfolio image (2).jpg'

const Home = ({ setCategory, category }) => {
  return (
    <div className='HomeDiv' id='home'>
      <div className='myImage'>
        <img src={myImage1} alt='Profile pic' />
      </div>
      <h1>
        <span>I'm Md Farhan Hashmi,</span> frontend developer based in India.
      </h1>
      <p>
        Whether you're a fellow developer, a designer, or a business owner
        looking to enhance your web presence, I'd love to connect. Let's push
        the boundaries of what's possible on the web together!
      </p>
      <div className='buttonsGroup'>
        <a
          href={category}
          className='connectButton'
          onClick={() => {
            setCategory('#contact')
          }}
        >
          Connect with me
        </a>
        <button className='resumeButton'>My resume</button>
      </div>
    </div>
  )
}
export default Home
