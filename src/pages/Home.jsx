import { fetchMovies, fetchTopRated, selectDiscoverMovie, selectTopRated } from "../feature/movieSlice"
import Header from "../components/Header";
import Row from "../components/Row";
import { useSelector } from "react-redux";

export default function Home() {

    // const movieData = useSelector(selectDiscoverMovie)
    // const randomMovie = movieData.data?.results[Math.floor(Math.random() * 20)]

    return (
    <>

        {/* <Header data={ randomMovie }></Header> */}

        {
            // (movieData.status == "idle") ?

                <>
                    <Row selector={ selectDiscoverMovie } actions={ fetchMovies } title={"Discover Movies"} />
                    <Row selector={ selectTopRated } actions={ fetchTopRated  } title={"Top Rated Movies"} />
                </>
                // :
                // <h1>loading</h1>
        }


    </>)
}