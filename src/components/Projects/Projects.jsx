import './Projects.css'
import youtubeClone from '../../images/youtubeCloneImage1.png'
import ecommerceImage from '../../images/eCommerceImage1.png'
import recipeAppImage from '../../images/recipeAppImage1.png'
import amazonCloneImage from '../../images/amazonCloneImage1.png'
import todoAppImage from '../../images/todoAppImage1.png'
import weatherAppImage from '../../images/weatherAppImage.png'

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className='titleheading'>
        <h1>My Latest Work</h1>
      </div>
      <div className='myworkContainer'>
        <a
          href='https://incandescent-trifle-41e17b.netlify.app/'
          target='blank'
        >
          <img src={youtubeClone} alt='youTubeClone' />
        </a>
        <a href='https://sprightly-mochi-d89f81.netlify.app/' target='blank'>
          <img src={ecommerceImage} alt='e-commerceImage' />
        </a>
        <a href='https://lustrous-elf-9e1b78.netlify.app/' target='blank'>
          <img src={recipeAppImage} alt='receipeAppImage' />
        </a>
        <a
          href='https://incomparable-empanada-d2849e.netlify.app/'
          target='blank'
        >
          <img src={amazonCloneImage} alt='amazonCloneImage' />
        </a>
        <a href='https://todo-app-react-18.netlify.app/' target='blank'>
          <img src={todoAppImage} alt='todoAppImage' />
        </a>
        <a href='https://fanciful-tapioca-c4bb26.netlify.app/' target='blank'>
          <img src={weatherAppImage} alt='todoAppImage' />
        </a>
      </div>
    </div>
  )
}
export default Projects
