import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import './perfil.css'

const Perfil = () => {
  const { t } = useTranslation()
  const { theme } = useContext(ThemeContext)

  return (
    <section className={`container perfil-container ${theme}`}>
      <div className={`text-center ${theme} contenedor`}>
        <h1 className='text-center profile-name'>
          {t('profileName')} - Aitana Alonso Lorenzo
        </h1>
        <div className='row align-items-center'>
          <div className='col-md-6 text-center'>
            <img
              className='img-fluid rounded profile-img'
              src='./avatar.jpg'
              alt='Foto de perfil de Aitana Alonso Lorenzo'
            />
            <div className='profile-social'>
              <h5 className='social-title'>{t('contact')}</h5>
              <ul className='social-list'>
                <li>
                  <a href='https://www.linkedin.com/in/aitana-alonso-lorenzo-713743296/'>
                    <img
                      src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png'
                      alt='Linkedin'
                    />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/AitanaAlonso01'>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                      alt='Github'
                    />
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/aitana_532/'>
                    <img
                      src='https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png'
                      alt='Instagram'
                    />
                  </a>
                </li>
              </ul>
              <p className='email'>
                {t('email')}: aitana.alonso.lorenzo@gmail.com
              </p>
              <p className='phone'>{t('phone')}: +34 693 52 03 08</p>
              <p className='location'>
                {t('location')}: {t('locationContent')}
              </p>
            </div>
          </div>
          <div className='col-md-6'>
            <article className='profile-content'>
              <br />
              <p className='profile-description'>{t('textProfile')}</p>
              <h4 className='knowledges-title'>{t('knowledgesTitle')}</h4>
              <p className='knowledges'>{t('knowledges')}</p>
              <h4 className='experience-title'>{t('experienceTitle')}</h4>
              <p className='experience'>{t('experience')}</p>
              <h4 className='academic-title'>{t('academicTitle')}</h4>
              <p className='academic'>{t('academic')}</p>
              <h4 className='work-title'>{t('workTitle')}</h4>
              <p className='work'>{t('work')}</p>
              <h4 className='language-title'>{t('languageTitle')}</h4>
              <p className='language'>{t('languageContent')}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Perfil
