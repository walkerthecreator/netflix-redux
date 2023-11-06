/* eslint-disable react/prop-types */
import { Button  } from "react-bootstrap"
import Badge from "react-bootstrap/Badge"
import Model from "./Popup"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectDetails , fetchDetails } from "../feature/commonSlice"

export default function Header({ data }){
    const dispatch = useDispatch()

    const headerInfo = useSelector(selectDetails)

    function handleFetch(data){
        console.log("tv" , data.id)
        dispatch(fetchDetails({type : "tv" , id :  data.id}))
    } 

    useEffect(()=>{
        if(data){
            handleFetch(data)
        }
    } , [data])
    
    return(
        <>
            {/* <div className="header">
                <img src={`https://image.tmdb.org/t/p/w500/${ headerInfo.data?.backdrop_path }`} title={ headerInfo.data?.original_name } />
                <div className="header-data">
                    <h1>{headerInfo.data?.original_name}</h1>
                    <Badge bg="warning">{ headerInfo.data?.vote_average}</Badge>
                    <span> ({ headerInfo.data?.vote_count })</span>
                    <span> { headerInfo.data?.original_language }</span>
                    <p>{ headerInfo.data?.overview  }</p>
                    <Button variant="danger" className="mx-2" >Play Now</Button>
                    <Model ></Model>
                </div>
                <div id="gradient"></div>
            </div> */}
            <div className="header">
                <img src={`https://image.tmdb.org/t/p/w500/${ headerInfo?.backdrop_path }`} title={ headerInfo?.original_name } />
                <div className="header-data">
                    <h1>{headerInfo?.original_name}</h1>
                    <Badge bg="warning">{ headerInfo?.vote_average}</Badge>
                    <span> ({ headerInfo?.vote_count })</span>
                    <span> { headerInfo?.original_language }</span>
                    <p>{ headerInfo?.overview  }</p>
                    <Button variant="danger" className="mx-2" >Play Now</Button>
                    <Model ></Model>
                </div>
                <div id="gradient"></div>
            </div>

        </>
    )
}