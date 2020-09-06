import React from 'react'

const AnimeItem = ({ anime }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={anime.image} alt='' />
        </div>
        <div className='card-back'>
          <h1>{anime.name}</h1>
          <ul>
            <li>
              <strong>Alter Name:</strong> {anime.altName}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AnimeItem
