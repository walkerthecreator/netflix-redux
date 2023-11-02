/* eslint-disable react/prop-types */
import { Button  } from "react-bootstrap"
import Badge from "react-bootstrap/Badge"


export default function Header({ data }){
    
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
                    <Button variant="danger">Watch</Button>
                </div>
                <div id="gradient"></div>
            </div>
        </>
    )
}