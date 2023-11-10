/* eslint-disable react/prop-types */
import { Button  } from "react-bootstrap"
import Badge from "react-bootstrap/Badge"
import Model from "./Popup"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectDetails , fetchDetails, fetchVideos } from "../feature/commonSlice"

export default function Header({ data }){
    const dispatch = useDispatch()

    const headerInfo = useSelector(selectDetails)
    

    function handleFetch(data){
        dispatch(fetchDetails({type : "tv" , id :  data.id}))
        dispatch(fetchVideos({ type : "tv" , id : data.id }))
    } 

    useEffect(()=>{
        if(data){
            handleFetch(data)
        }
    } , [data])
    
    return(
        <>
            <div className="header">
                <img src={`https://image.tmdb.org/t/p/w1280/${ headerInfo?.backdrop_path }`} title={ headerInfo?.original_name } />
                <div className="header-data">
                    <h1 className="fw-bold">{headerInfo?.original_name || headerInfo?.original_title}</h1>
                    <Badge bg="warning">{ headerInfo?.vote_average}</Badge>
                    <span> ({ headerInfo?.vote_count })</span>
                    <span> { headerInfo?.original_language }</span>
                    <p className="mt-3">{ headerInfo?.overview  }</p>
                    <Button variant="danger" className="mx-2" >Play Now</Button>
                    <Model ></Model>
                </div>
                <div id="gradient"></div>
            </div>

        </>
    )
}