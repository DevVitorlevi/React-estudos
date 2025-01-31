import {useState, useEffect} from 'react'

export const useFetch = (url) =>{
    const [data,setData] =useState(null)

useEffect(() =>{
    async function fetchData(){
        const res = await fetch(url)
        const json = await res.json()
    
    setData(json)

}
    fetchData()
},[url])
    return {data};
}       