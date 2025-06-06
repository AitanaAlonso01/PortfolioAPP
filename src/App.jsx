import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './context/ThemeContext.jsx'
import { useTranslation } from 'react-i18next'
import './App.css'
import Home from './Views/InicioMenu/Inicio.jsx'
import Proyectos from './Views/Proyectos/MisProyectos.jsx'
import Header from './Components/Header/Header.jsx'
import Profile from './Views/Perfil/Perfil.jsx'
import Proyecto1 from './Views/Proyectos/Projects/Proyecto1.jsx'
import Proyecto2 from './Views/Proyectos/Projects/Proyecto2.jsx'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { t, i18n } = useTranslation()

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <Header />
      <button onClick={toggleTheme}>{t('theme')}</button>
      <button onClick={() => i18n.changeLanguage('en')}>
        <img src='https://flagcdn.com/gb.svg' alt='English' />
      </button>
      <button onClick={() => i18n.changeLanguage('es')}>
        <img src='https://flagcdn.com/es.svg' alt='Spanish' />
      </button>
      <button onClick={() => i18n.changeLanguage('val')}>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Flag_of_the_Valencian_Community_%282x3%29.svg/500px-Flag_of_the_Valencian_Community_%282x3%29.svg.png'
          alt='Valencian'
        />
      </button>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/perfil' element={<Profile />} />
        if ( /proyectos\/1/.test(window.location.href) ){' '}
        {<Route path='/proyectos/1' element={<Proyecto1 />} />} else if (
        /proyectos\/2/.test(window.location.href) ){' '}
        {<Route path='/proyectos/2' element={<Proyecto2 />} />}
      </Routes>
    </div>
  )
}

export default App
