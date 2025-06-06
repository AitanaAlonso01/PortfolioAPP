import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { useTranslation } from 'react-i18next'
import './proyectos.css'

const proyectos = [
  {
    id: 1,
    nombre: 'portfolioApp',
    descripcion: 'portfolioAppDesc',
    img: '/portfolio.png'
  },
  {
    id: 2,
    nombre: 'crudApp',
    descripcion: 'crudAppDesc',
    img: '/crud.png'
  }
]

const Proyectos = () => {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <div className={`proyectos-container ${theme}`}>
      <h2 className='title'>{t('projectsTitle')}</h2>
      <div className='grid'>
        {proyectos.map(proyecto => (
          <div key={proyecto.id} className='card'>
            <a href={`/proyectos/${proyecto.id}`}>
              <h3>{t(proyecto.nombre)}</h3>
            </a>
            <img
              className='projectImg'
              src={proyecto.img}
              alt={t(proyecto.nombre)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Proyectos
