import { Button  } from "react-bootstrap"
import Badge from "react-bootstrap/Badge"
export default function Header({ data }){
    console.log("data" , data)
    return(
        <>
            <div className="header">
                <img src={`https://image.tmdb.org/t/p/w500/${ data?.backdrop_path }`} title={ data?.original_title } />
                <div className="header-data">
                    <h1>{data?.original_title}</h1>
                    <Badge varient="warning">{ data?.vote_average}</Badge>
                    <span> ({ data?.vote_count })</span>
                    <span> { data?.original_language }</span>
                    <p>{ data?.overview  }</p>
                    <Button varient="danger">Watch</Button>
                </div>
            </div>
        </>
    )
}