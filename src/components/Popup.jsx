import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchVideos, selectDetails, togglePopup } from '../feature/commonSlice';
import { useEffect, useState } from 'react';
import axios from 'axios';
import requests, { TOKEN } from '../utils/request';
import Cards from './Card';
import { Badge } from 'react-bootstrap';
import VideoPlayer from './VideoPlayer';

function Model() {

    const dispatch = useDispatch()
    const show = useSelector(state => state.common.isOpen)
    const platform = useSelector(state => state.common.popup.platform)
    const details = useSelector(selectDetails)

        
    const [recommend , setRecommend] = useState(null)
    const [credits , setCredits] = useState(null) //array of crew containing Directing , Acting , Production, Crew


    async function fetchRecommendation(details){
        const response = await axios.get(requests.getRecommendation(platform , details?.id) , { headers : { Authorization : TOKEN } })
        setRecommend(response.data)
    }

    async function fetchCredits(details){
        const response = await axios.get(requests.getDetails(platform , details?.id ) , { headers : { Authorization : TOKEN } })
        setCredits(response.data)
    }

    useEffect(()=>{
        if(details){
            fetchRecommendation(details)
            fetchCredits(details)

        }   
    }, [details])
    

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
        className='text-dark modal-lg '
        
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

            <p>{ details?.overview }</p> 
                <Badge varient="light"> Season {details?.number_of_seasons} </Badge>



                <h2>Recommendations</h2>

            <div className='d-flex flex-wrap gap-3 border mx-auto my-3 text-dark' style={{ width : "86%" }}>
            {
                recommend?.results?.map((item)=>{
                    return (<>
                        <Cards item={ item } type={ "movie" }></Cards>
                    </>) 
                    
                }) 
            }
            </div>

            <div>
                <h5> <span className='fw-bold'>Director:</span>  </h5>
                <h5> <span className='fw-bold'>Acting:</span>  </h5>
                <h5> <span className='fw-bold'>Production:</span>  </h5>
                <h5> <span className='fw-bold'>Crew:</span>  </h5>
                
            </div>


            
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Model;