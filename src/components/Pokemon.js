import React from 'react'

export default function Pokemon({pokemons}) {
 
  return (
    
    <>
        {
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
                <button id="pikachu" /* onclick="pikachu();" */>피카츄</button>
                <button id="bulbasaur" /* onclick="bulbasaur();" */>이상해씨</button>
                <button id="charmander" /* onclick="charmander();" */>파이리</button>
                <button id="squirtle" /* onclick="squirtle();" */>꼬부기</button>
                
                <div id="description">
                <p id="pokemon">{pokemons.name}</p>
                <p id="sh1">Type</p>
                {/* <p id="type">{pokemons.types[0].type.name}</p> */}
                <p id="sh2">Ability</p>
                <ul id="ability">
                  {/* <li>{pokemons.abilities[0].ability.name}</li> */}
                  {/* <li>{pokemons.abilities[1].ability.name}</li> */}
                </ul>
                </div>            
          </div>
        }
    </>
  )
}

