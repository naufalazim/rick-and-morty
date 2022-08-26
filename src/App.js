import axios from 'axios';
import './App.css';
import {useEffect, useState} from 'react';

// "https://rickandmortyapi.com/api/character"

function App() {

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

        <div className='flex justify-between grid grid-cols-4 gap-4 mx-auto'>

          {characters.map(character => (
            <div className='max-w-sm rounded overflow-hidden shadow-lg'>

                <div>
                  <img src={character.image} alt={character.name} />
                </div>

                <div className='font-bold py-4'>
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
