import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {   selectDetails, togglePopup } from '../feature/commonSlice';
import { useEffect, useState } from 'react';
import axios from 'axios';
import requests, { TOKEN } from '../utils/request';
import Cards from './Card';
// import { Badge } from 'react-bootstrap';
import VideoPlayer from './VideoPlayer';
// import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';

function Model() {

    const dispatch = useDispatch()
    const show = useSelector(state => state.common.isOpen)
    const platform = useSelector(state => state.common.popup.platform)
    const details = useSelector(selectDetails)

        
    const [recommend , setRecommend] = useState(null)
    const [credits , setCredits] = useState(null) //array of crew containing Directing , Acting , Production, Crew

    const [ director , setDirector ] = useState(null)
    const [ acting , setActing ] = useState(null)
    const [ writer , setWriting ] = useState(null)

    console.log("credit" , credits)


    async function fetchRecommendation(details){
        const response = await axios.get(requests.getRecommendation(platform , details?.id) , { headers : { Authorization : TOKEN } })
        setRecommend(response.data)
    }

    async function fetchCredits(details){
        const response = await axios.get(requests.getCredits(platform , details?.id ) , { headers : { Authorization : TOKEN } })
        setCredits(response.data)
    }


    useEffect(()=>{
        if(details){
            fetchRecommendation(details)
            fetchCredits(details)
            
        }   
    }, [ details ])

    useEffect(()=>{
        const director = credits?.crew?.filter(( item , index )=>{
            return item.known_for_department == "Directing"
        })

        const acting = credits?.cast?.filter((item , index) => {
            return item.known_for_department == "Acting"
        })

        const writer = credits?.cast?.filter((item , index ) =>{
            return item.known_for_department == "Writing"
        })
        
        setDirector(director?.[0]?.name)
        setActing(acting)
        setWriting(writer)
    } , [credits])
    

    function toggleShow(){
        dispatch(togglePopup())
    }

  return (
    <>
 
      <Button variant='light' 
      onClick={ ()=>{ dispatch(togglePopup()) } 
      }> More Info </Button>
      
      <Modal
        size="xl"
        show={show}
        onHide={toggleShow}
        aria-labelledby="example-modal-sizes-title-lg"
        className='text-dark modal-lg'
        dialogClassName='custom-modal'
      >

        <Modal.Header closeButton >
          <Modal.Title id="example-modal-sizes-title-lg" >
            {
                details?.original_name || details?.original_title
            }
          </Modal.Title>
        </Modal.Header>

        <Modal.Body >


            <VideoPlayer></VideoPlayer>

            <p className='my-3'>{ details?.overview }</p> 

            <select name="" id="" className='p-1 px-2 bg-dark my-3 text-white'>
                {
                    [...Array(details?.number_of_seasons)].map((_ , index)  => {
                        return <option key={index}> season {index + 1} </option>
                    })
                }
            </select>

            <span className=' bg-dark border p-1'>Episodes : { Math.round(details?.number_of_episodes / details?.number_of_seasons )}</span>


                {
                    ( platform == "tv" ) 
                    ? 
                    <p> Runtime : <span className='badge bg-white text-dark'>{ details?.episode_run_time } min</span> </p>
                    :
                    ""
                }

            <div >
                <span>Genres: </span>
                {
                    details?.genres.map((item , index)=>{
                        return <span className='badge border mx-1 mt-2 mb-5' key={index}>{ item?.name }</span>
                    })
                }
                </div>


            <h2 className='ms-3'> Recommendation for you</h2>

            <div className='d-flex flex-wrap gap-3 mx-auto my-3' style={{ width : "86%" }}>
            {
                recommend?.results?.map((item)=>{
                    return (<>
                        <Cards item={ item } type={ "movie" }></Cards>
                    </>) 
                    
                }) 
            }
            </div>

            <div>
                <h5 className='fw-bold'> Director: <span className='fw-bold badge bg-dark opacity-20 text-white'> { director }</span>  </h5>
                <h5> <span className='fw-bold'>Acting:</span>{ 
                acting?.map((item , index)=> {
                return <span key={index} className='badge bg-dark opacity-20 text-white m-1'> { item?.name } </span>}) }  </h5>
                <h5 className='fw-bold'>Writer :  {
                    writer?.map((item , index) =>{
                        return <span key={index} > { item?.name} </span>
                    })
                    }
                    </h5>
                
            </div>


            
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Model;