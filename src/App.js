import React, { useState, useRef, useCallback } from 'react'
import useAnimeSearch from './components/anime/AnimeSearch'
import AnimeGrid from './components/anime/AnimeGrid'
import Header from './components/ui/Header'
import './App.css'

export default function App() {
  const [pageNumber, setPageNumber] = useState(1)

  const {
    animes,
    hasMore,
    loading,
    error
  } = useAnimeSearch(pageNumber)

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
      <Header/>
      <AnimeGrid animes ={animes} loading ={loading} error={error} lastAnimeElementRef = {lastAnimeElementRef} />     
    </>
  )
}