/* eslint-disable react/prop-types */
import { Button  } from "react-bootstrap"
import Badge from "react-bootstrap/Badge"
import Model from "./Popup"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchTvDetails } from "../feature/tvSlice"


export default function Header({ data }){

    const dispatch = useDispatch()

    function handleFetch(){
        if(data) dispatch(fetchTvDetails(data?.id))
    }

    useEffect(()=>{
        handleFetch()
    } , [data])
    
    return(
        <>
            <div className="header">
                <img src={`https://image.tmdb.org/t/p/w500/${ data?.backdrop_path }`} title={ data?.original_name } />
                <div className="header-data">
                    <h1>{data?.original_name}</h1>
                    <Badge bg="warning">{ data?.vote_average}</Badge>
                    <span> ({ data?.vote_count })</span>
                    <span> { data?.original_language }</span>
                    <p>{ data?.overview  }</p>
                    <Button variant="danger" className="mx-2">Play Now</Button>
                    <Model ></Model>
                </div>
                <div id="gradient"></div>
            </div>
        </>
    )
}