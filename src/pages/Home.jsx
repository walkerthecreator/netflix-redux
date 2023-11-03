import { fetchMovies, fetchTopRated, selectDiscoverMovie, selectTopRated } from "../feature/movieSlice"
import Header from "../components/Header";
import Row from "../components/Row";
import { useDispatch, useSelector } from "react-redux";
import { fetchNetflixOriginals, selectNetflixOriginals, selectTopRatedTv , fetchTopRatedTv, selectDiscoverTv, fetchDiscoverTv } from "../feature/tvSlice";
import { useEffect } from "react";
import { keys } from "../utils/request";


export default function Home() {

    const movieData = useSelector(selectNetflixOriginals)

const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchNetflixOriginals())
    } ,[])

    return (
    <>

        <Header data={ movieData.data?.results[Math.floor(Math.random() * 20)] }></Header>

        {

                <>
                    <Row selector={ selectDiscoverMovie } actions={ fetchMovies } title={"Discover Movies"} type={ keys.movie }/>
                    <Row selector={ selectTopRated } actions={ fetchTopRated  } title={"Top Rated Movies"} type={ keys.movie }/>
                    <Row selector={ selectTopRatedTv } actions={ fetchTopRatedTv  } title={"Top Rated Series"} type={ keys.tv }/>
                    <Row selector={ selectDiscoverTv } actions={ fetchDiscoverTv  } title={"Discover Series"} type={ keys.tv }/>
                </>
        }


    </>)
}