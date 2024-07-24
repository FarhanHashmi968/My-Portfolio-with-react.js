import './Navbar.css'
import menuButton from '../../images/menuButton.svg'
import closeButton from '../../images/closeButton.svg'
import { useState } from 'react'

const Navbar = ({ category, setCategory }) => {
  const [visible, setVisible] = useState('')
  return (
    <div className='navbar' id='navbar'>
      <span>FarhanH</span>
      <ul style={{ right: `${visible}` }}>
        <img
          src={closeButton}
          alt=''
          className='closeButton'
          onClick={() => {
            setVisible('-18.75rem')
          }}
        />
        <a href={category}>
          <li
            onClick={() => {
              setCategory('#home')
            }}
            className={category == '#home' ? 'active' : ''}
          >
            Home
          </li>
        </a>
        <a href={category}>
          <li
            onClick={() => {
              setCategory('#about')
            }}
            className={category == '#about' ? 'active' : ''}
          >
            About
          </li>
        </a>
        <a href={category}>
          <li
            onClick={() => {
              setCategory('#services')
            }}
            className={category == '#services' ? 'active' : ''}
          >
            Services
          </li>
        </a>
        <a href={category}>
          <li
            onClick={() => {
              setCategory('#projects')
            }}
            className={category == '#projects' ? 'active' : ''}
          >
            Portfolio
          </li>
        </a>
        <a href={category}>
          <li
            onClick={() => {
              setCategory('#contact')
            }}
            className={category == '#contact' ? 'active' : ''}
          >
            Contact
          </li>
        </a>
      </ul>
      <a href='#contact'>
        <input
          className='contactButton'
          type='button'
          value='Connect with me'
          onClick={() => {
            setCategory('#contact')
          }}
        />
      </a>
      <img
        src={menuButton}
        alt=''
        className='menuButton'
        onClick={() => {
          setVisible('0rem')
        }}
      />
    </div>
  )
}
export default Navbar
