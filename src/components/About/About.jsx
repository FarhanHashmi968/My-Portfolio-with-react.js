import './About.css'
import myImage1 from '../../images/My Portfolio image (1).jpg'

const About = () => {
  return (
    <div className='about' id='about'>
      <h1>About me</h1>
      <div className='aboutDescription'>
        <div className='aboutLeft'>
          <img src={myImage1} alt='' />
        </div>
        <div className='aboutRight'>
          <div className='p'>
            <p>
              I'm a passionate front-end web developer. I craft engaging and
              visually stunning websites that bring ideas to life on the digital
              canvas.
            </p>
            <p>
              What I Do : <br />
              Design with Purpose : I blend creativity and functionality to
              create user-friendly interfaces that are not only beautiful but
              also intuitive. <br /> Code Wizardry : I write clean, efficient
              code in HTML, CSS, JavaScript and React JS to make web pages come
              alive with interactivity and smooth animations. <br /> Responsive
              Magic : Whether it's a desktop, tablet, or mobile phone, I ensure
              that every website looks and works flawlessly across all devices.
            </p>
          </div>
          <div className='skills'>
            <div className='html'>
              <p>HTML</p> <hr />
            </div>
            <div className='css'>
              <p>CSS</p> <hr />
            </div>
            <div className='javascript'>
              <p>Javascript</p> <hr />
            </div>
            <div className='reactjs'>
              <p>React JS</p> <hr />
            </div>
            <div className='tailwindcss'>
              <p>Tailwind CSS</p> <hr />
            </div>
            <div className='bootstrap'>
              <p>Bootstrap</p> <hr />
            </div>
            <div className='github'>
              <p>Github</p> <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
