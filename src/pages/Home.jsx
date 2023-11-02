import { fetchMovies, fetchTopRated, selectDiscoverMovie, selectTopRated } from "../feature/movieSlice"
import Header from "../components/Header";
import Row from "../components/Row";
import { useDispatch, useSelector } from "react-redux";
import { fetchNetflixOriginals, selectNetflixOriginals } from "../feature/tvSlice";
import { useEffect } from "react";

export default function Home() {

    const movieData = useSelector(selectNetflixOriginals)

const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchNetflixOriginals())
    } ,[])

    console.log(movieData)



    return (
    <>

        <Header data={ movieData.data?.results[Math.floor(Math.random() * 20)] }></Header>

        {

                <>
                    <Row selector={ selectDiscoverMovie } actions={ fetchMovies } title={"Discover Movies"} />
                    <Row selector={ selectTopRated } actions={ fetchTopRated  } title={"Top Rated Movies"} />
                    {/* <Row selector={ selectTvTopRated } actions={ fetchTopRated  } title={"Top Rated Movies"} /> */}
                </>
        }


    </>)
}