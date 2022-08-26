import axios from 'axios';
import './App.css';
import {useEffect, useState} from 'react';

// "https://rickandmortyapi.com/api/character"

function App() {

  //set queries of character:
  const [characters, setCharacters] = useState([])
  //search button:
  const [query, setQuery] = useState("")


  useEffect(() => {
    const fetchData = async() => {
      try{
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        setCharacters(data.results)
      }
      catch(error) {
        console.error(error)
      }
    }
    fetchData()
  }, [query])
    


  return (
    <div className="App">

    <div>
    <h1 class="
     text-5xl 
     font-medium
     text-gray-900 
     dark:text-white 
     md:text-4xl 
     lg:text-5xl">
     <span class="text-gray-900 font-VT323 ">
      Rick and morthy
     </span></h1>

     <p className='mt-4 mb-3 text-gray-500 dark:text-gray-400 font-bold text-xs'>Created by ❤️Naufal Azim</p>
    </div>

      <div className='px-5'>

      {/* Search button  */}
      <div className='py-5'>

        <input 
        type="input" 
        placeholder={"Search Character"} 
        className="rounded-lg border border-gray-800 py-1 px-2" 
        onChange={e => setQuery(e.target.value)}
        value={query}
        />


      </div>

        <div className='flex justify-between grid grid-cols-2 gap-4 mx-auto sm:grid-cols-4'>

          {characters.map(character => (
            <div className='w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white-800 dark:border-gray-700'>

                <div className='flex justify-center px-4 pt-4'>
                  <img className='mb-3 w-44 h-44 rounded-full shadow-lg' src={character.image} alt={character.name} />
                </div>

                <div className='font-bold py-4 '>
                {character.name}
                </div>

            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default App;
