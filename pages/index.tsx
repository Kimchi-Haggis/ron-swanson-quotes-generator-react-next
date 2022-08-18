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
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={getQuotes}
      >
        Button
      </button>
      <div>
        {data}
      </div>
    </div>
  )
}

export default Home;
