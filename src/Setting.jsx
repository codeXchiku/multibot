import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import UserDetails from './component/UserDetails'

function Setting() {
    const[details,setDetails] = useState([])
    const[isLoading,setIsLoading]=useState(true)
  
    const getUsers =async ()=>{
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      setDetails(await res.json())
    }
    useEffect(()=>{
      getUsers()
        setIsLoading(false)
      },[])
  
    return (
      <>
        <div className="container mx-auto">
          {isLoading?<h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>: <div className="grid grid-cols-3 gap-4">
                {details.map(detail=>(
                  <UserDetails key={detail.id} detail={detail}/>
                ))}
          </div>}
        </div>
      </>
    )
  }

export default Setting