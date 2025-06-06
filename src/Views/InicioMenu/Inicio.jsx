import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { useTranslation } from 'react-i18next'
import './styles.css'

const Inicio = () => {
  const { theme } = useContext(ThemeContext) // Obtenemos el tema actual
  const { t } = useTranslation() // Usamos traducciones

  return (
    <div className={`container ${theme}`}>
      <h1 className='title'>{t('welcome')}</h1>
      <p className='subtitle'>{t('subtitle')}</p>
      <a href='/proyectos' className='button'>
        {t('projects')}
      </a>
    </div>
  )
}

export default Inicio
