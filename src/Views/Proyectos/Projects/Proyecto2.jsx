import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../../../context/ThemeContext.jsx'
import './projects.css'

const Proyecto2 = () => {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <div className={`proyecto1-container ${theme}`}>
      <h2 className='title'>{t('crudApp')}</h2>
      <p className='description'>{t('crudAppDesc')}</p>
      <div className='projectGalery'>
        <img className='projectImg' src='/crud.png' alt='CRUD App' />
        <img className='projectImg' src='/crud2.png' alt='CRUD App' />
      </div>
    </div>
  )
}

export default Proyecto2
