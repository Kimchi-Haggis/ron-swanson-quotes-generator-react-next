/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Quotes from '@components/quotes/Quotes';
import ToggleTheme from '@components/toggleDarkMode/ToggleTheme';
import type { NextPage } from 'next'

const Home: NextPage = () => {

  return (
    <div className='box-section bg-white dark:bg-black py-10'>
      <div className='box-contents'>
        <div className='box-item'>
          <div className='box-item-head border-b-2 border-black dark:border-white'>
            I'M RON FUCKING SWANSON
          </div>
          <div className='box-border text-center font-extrabold'>
            <img 
              className='mx-auto my-0'
              src='https://i.pinimg.com/originals/d1/bf/19/d1bf19051c063d9c1cd9361203eb7450.jpg'
            />
            <Quotes />
          </div>
        </div>
      </div>
      <ToggleTheme />
    </div>
  )
}

export default Home;
