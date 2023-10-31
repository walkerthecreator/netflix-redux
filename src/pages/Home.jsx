import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies, selectDiscoverMovie } from "../feature/movieSlice"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import Cards from "../components/Card";
import axios from "axios";
import { TOKEN } from "../utils/request";
import Header from "../components/Header";

export default function Home() {
    const dispatch = useDispatch() //triggering an action
    const movieData = useSelector(selectDiscoverMovie) //getting data from store

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    const randomMovie = movieData.data?.results[Math.floor(Math.random() * 20)]

    return (<>

        <Header data={ randomMovie }></Header>

        {
            (movieData.status == "idle") ?
                <div>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={5}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                            {
                                movieData.data?.results.map((item, index) => {
                                    return <SwiperSlide key={index}>
                                        <Cards item={item}></Cards>
                                    </SwiperSlide>
                            })}
                    </Swiper>
                </div>




                :
                <h1>loading</h1>
        }

        {

        }
    </>)
}