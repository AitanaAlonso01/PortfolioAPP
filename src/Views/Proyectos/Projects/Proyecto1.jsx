import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../../../context/ThemeContext.jsx'
import './projects.css'

const Proyecto1 = () => {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <div className={`proyecto1-container ${theme}`}>
      <h2 className='title'>{t('portfolioApp')}</h2>
      <p className='description'>{t('portfolioAppDesc')}</p>
      <div className='projectGalery'>
        <img className='projectImg' src='/portfolio.png' alt='Portfolio App' />
        <img className='projectImg' src='/portfolio2.png' alt='Portfolio App' />
      </div>
    </div>
  )
}

export default Proyecto1
