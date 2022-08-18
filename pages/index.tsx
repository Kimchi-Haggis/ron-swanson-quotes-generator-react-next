/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { useState } from 'react';

const Home: NextPage = () => {
  const [data, setData] = useState()

  const axios = require('axios').default;
  const url = `https://ron-swanson-quotes.herokuapp.com/v2/quotes`
  
  async function getQuotes() {
    try {
      const response = await axios.get(url);
      setData(response.data)
      console.log(response.data);
    } catch (error) {
      console.error("error");
    }
  }
  return (
    <div className='box-section bg-white dark:bg-black py-10'>
      <div className='box-contents'>
        <div className='box-item'>
          <div className='box-item-head border-b-2'>
            I'M RON FUCKING SWANSON
          </div>
          <div className='box-border text-center font-extrabold'>
            <img 
              className='mx-auto my-0'
              src='https://i.pinimg.com/originals/d1/bf/19/d1bf19051c063d9c1cd9361203eb7450.jpg'
            />
            <button
              className="bg-black hover:bg-white border-2 text-white hover:text-black font-bold py-2 px-4"
              onClick={getQuotes}
            >
              GIVE ME ANOTHER
            </button>
            <div className='box-item-head'>
              {data}
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Home;
