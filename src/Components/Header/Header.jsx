import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import './header.css'

const Header = () => {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [showDropdown, setShowDropdown] = useState(false)

  const changeLanguage = language => {
    i18n.changeLanguage(language)
    setShowDropdown(false)
  }

  return (
    <header className='header'>
      <h1 className='logo'>{t('portfolioTitle')}</h1>

      <nav>
        <Link to='/' className='nav-link'>
          {t('home')}
        </Link>
        <Link to='/proyectos' className='nav-link'>
          {t('projects')}
        </Link>
        <Link to='/perfil' className='nav-link'>
          {t('profile')}
        </Link>
      </nav>

      <div className='settings-bar'>
        <button onClick={toggleTheme}>{t('theme')}</button>

        {/* Menú desplegable hacia abajo con banderas */}
        <div className='dropdown'>
          <button
            className='dropdown-btn'
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {t('language')}
          </button>
          {showDropdown && (
            <div className='dropdown-content'>
              <button onClick={() => changeLanguage('en')}>
                <img src='https://flagcdn.com/gb.svg' alt='English' />
              </button>
              <button onClick={() => changeLanguage('es')}>
                <img src='https://flagcdn.com/es.svg' alt='Spanish' />
              </button>
              <button onClick={() => changeLanguage('val')}>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Flag_of_the_Valencian_Community_%282x3%29.svg/500px-Flag_of_the_Valencian_Community_%282x3%29.svg.png'
                  alt='Valencian'
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
