import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import Cards from './Card';
import { useEffect } from 'react';

function Row({ selector , actions , title , type }){

    const movieData = useSelector(selector)
    const dispatch = useDispatch()

    useEffect(()=>{
            dispatch(actions())
    } , [])

    return (<>
        <div className='my-3'>
                <h2 className='mx-4'>{ title }</h2>

                        <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={5}
                        navigation
                    >
                            {
                                movieData.data?.results.map((item, index) => {
                                    return <SwiperSlide key={index}>
                                        <Cards item={item} type={type}></Cards>
                                    </SwiperSlide>
                            })}
                    </Swiper>
                        </div>
    </>)

}

export default Row;