import React, { useEffect, useState } from 'react'

function Movie() {

    const [movieList,setMovielist]=useState([]);

    const getMovie=()=>{
        fetch("//dummy api")
        .then((resp)=>resp.json)
        .then(resp1=>setMovielist(resp1))
    }

    useEffect(()=>{
        getMovie()
    },[])

  return (
    <div>
      {data.map((item,i)=>(
        <img src={item.poster_path}/>
      ))}
    </div>
  )
}

export default Movie
