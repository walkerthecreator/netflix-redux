import { useSelector } from "react-redux"
import { selectVideos } from "../feature/commonSlice"
import { useEffect, useState } from "react"

export default function VideoPlayer(){

    const videoList = useSelector(selectVideos)
    const [videos , setVideos] = useState(null)

    useEffect(()=>{
        if(videoList){
            const filteredVideos = videoList?.data?.results?.filter(item => {
               return item.site == "YouTube"
            })
            setVideos(filteredVideos[0])
        }
    } , [videoList] ) 


    return(
        <>
        <div>
        <iframe id="ytplayer" type="text/html" width="720" height="405"
        src={`https://www.youtube.com/embed/${ videos?.key }?autoplay=1`}
        frameBorder="0" allowfullscreen />
        </div>
        </>
    )
}