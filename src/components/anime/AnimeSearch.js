import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useAnimeSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [animes, setanimes] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setanimes([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'https://anime2211.herokuapp.com/anime',
      params: { page: pageNumber , limit : 20 },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setanimes(prevanimes => {
        return [...new Set([...prevanimes, ...res.data.results.map(b => b)])]
      })
      setHasMore(res.data.results.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, animes, hasMore }
}