import React, { useState } from 'react'

const Quotes = () => {
    const [data, setData] = useState()
    const [btn, setBtn] = useState("GIVE ME A DRINK")
    const axios = require('axios').default;
    const url = `https://ron-swanson-quotes.herokuapp.com/v2/quotes`
    
    async function getQuotes() {
      try {
        const response = await axios.get(url);
        setData(response.data)
        setBtn("GIVE ME ANOTHER")
        console.log(response.data);
      } catch (error) {
        console.error("error");
      }
    }
  return (
    <div>
        <button
            className="bg-black hover:bg-white border-2 text-white hover:text-black font-bold py-2 px-4"
            onClick={getQuotes}
        >
            {btn}
        </button>
        <div className='py-6 text-lg md:text-2xl lg:text-4xl'>
            {data}
        </div>
    </div>
  )
}

export default Quotes;