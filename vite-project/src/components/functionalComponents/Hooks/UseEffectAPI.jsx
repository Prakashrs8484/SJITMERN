import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const useEffectAPI = () => {
  var [data, setData] = React.useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      console.log(response)
      setData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  
  return (
    <div>
        <h1>useEffectAPI</h1>
        <ol>
          {
            data.map((data) => (
              <li key={data.id}>{data.title}</li>
            ))
          }
        </ol>
    </div>
  )
}

export default useEffectAPI
