import React, {useEffect,useState} from 'react'

function App() {
  const [backendData,setData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setData(data)
      }
    )
  },[])

  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.users.map( user => (
          <p> {user}</p>
        ))
      )}
    </div>
  )
}

export default App