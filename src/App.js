import './App.css';
import { useState, useEffect } from 'react';
import Pokemon from './components/Pokemon';
// import bulbasaur from './components/Pokemon';

function App() {
  // 포켓몬 api
  const pokemon_API = 'https://pokeapi.co/api/v2/pokemon/pikachu';
  /* 버튼누를때마다 url 바뀌면서 정보 리로드 */
  const [url, setUrl] = useState('');
  let pikachu = () => {
    setUrl('https://pokeapi.co/api/v2/pokemon/pikachu')
    
  }

  let bulbasaur = () => {
    setUrl('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    
  } 

  let charmander = () => {
    setUrl('https://pokeapi.co/api/v2/pokemon/charmander')
  }

  let squirtle = () => {
    setUrl('https://pokeapi.co/api/v2/pokemon/squirtle')
  }
  
  const [pokemons, setPokemon] = useState([]);
  const pokemonData = () => {
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
      const p = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
      const b = data.types[0].type.name
      console.log(url)
      
      setPokemon(data)
    })
    .catch(() => {
      console.log('데이터 요청 에러') // 에러체크 나중에 좀더 제대로 검색해보기
    })
  
  }
  

  useEffect(() => {
   pokemonData();
   pikachu();
  }, []);


  /* 능력 map 함수 */
  const list = pokemons.abilities;

  return (
    <div class="frame">
      <div id="encyclopedia"></div>
      <div id="ellipse_1"></div>
      <div id="ellipse_2"></div>
      <div id="ellipse_3"></div>
      <div id="ellipse_4"></div>
      <div id="line_1"></div>
      <div id="line_2"></div>
      <div id="line_3"></div>
      
      <div id="look">
          <div id="gif">
            {
              pokemons.sprites ? (<img src={pokemons['sprites']['versions']['generation-v']['black-white']['animated']['front_default']} alt='피카츄'/>) : (null)
            }
            
          </div>
      </div>
      <button id="pikachu" onclick={pikachu}>피카츄</button>
      <button id="bulbasaur" onclick={bulbasaur}>이상해씨</button>
      <button id="charmander" onclick={charmander}>파이리</button>
      <button id="squirtle" onclick={squirtle}>꼬부기</button>
      
      <div id="description">
      <p id="pokemon">{pokemons.name}</p>
      <p id="sh1">Type</p>
            {
              pokemons.types ? (<p id="type">{pokemons.types[0].type.name}</p>) : (null)
            }
      <p id="sh2">Ability</p>
      <ul id="ability">
            {
              pokemons.abilities ? (list.map(poke =>  {
                return (
                  <li key={poke.id}>{poke.ability.name}</li>
                )
              })) : (null)
            }
      </ul>
      </div>            
    </div>
  );
}

export default App;
