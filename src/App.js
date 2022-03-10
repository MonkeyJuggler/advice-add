
import { useState, useEffect } from 'react'
const App = () => {
  const [ads, setAds] = useState("")
  const [error, setError] = useState ({
    error: false,
    message: ""
  })

  const collect = async () => {
    try{
      const response = await fetch("https://api.thecaptapi.com/v1/images/search?limit=10")
      console.log(response)
      
      if(response.status !=200){
        throw new Error("oops")
      
      }
      const data = await response.json()
      setAds(data.slip)
    } catch (error) {
      setError({error: true, message: error.message })
    }
  }

  useEffect(() => {
    collect()
  }, [] );

  if(error.error){
    return <h1>an error has occured: {error.message}</h1>
  }


  return (
    <div>
      <h1>advice: {ads.advice}</h1>
      <button onClick={collect}>fetch</button>
    </div>
  )
}

export default App


//https://api.adviceslip.com/advice