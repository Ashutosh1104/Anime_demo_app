import React, { useState, useRef, useCallback } from 'react'
import useAnimeSearch from './components/anime/AnimeSearch'
import AnimeItem from './components/anime/AnimeItem'
//import Header from './components/ui/Header'
import './App.css'

export default function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    animes,
    hasMore,
    loading,
    error
  } = useAnimeSearch(query, pageNumber)

  const observer = useRef()
  const lastAnimeElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
     observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        console.log('visible')
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  return (
    <>
      <div className="cards">
      {animes.map((anime, index) => {
        if (animes.length === index + 1) {
          return <div ref={lastAnimeElementRef} key={anime.name}><AnimeItem anime={anime}/></div>
        } else {
          return <div key={anime.name}><AnimeItem anime={anime}/></div>
        }
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
      </div>
    </>
  )
}