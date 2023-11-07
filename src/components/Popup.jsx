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

    const show = useSelector(state => state.common.isOpen)
    const dispatch = useDispatch()

        
    const details = useSelector(selectDetails)
    const [recommend , setRecommend] = useState(null)

    async function fetchRecommendation(){
        const response = await axios.get(requests.getRecommendation("movie" , details?.id) , { headers : { Authorization : TOKEN } })
        setRecommend(response.data)
    }

    useEffect(()=>{
        if(details){
            fetchRecommendation(details)
            // fetchVideos({ type : type })

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
        size="lg"
        show={show}
        onHide={toggleShow}
        aria-labelledby="example-modal-sizes-title-lg"
        className='text-dark'
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" >
            {
                details?.name
            }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>


            <VideoPlayer></VideoPlayer>

            <p>{ details?.overview }</p> 
                <Badge varient="light"> Season {details?.number_of_seasons} </Badge>



            <div className='d-flex flex-wrap gap-2' style={{ width : "90%" }}>
            {
                recommend?.results?.map((item)=>{
                    return (<>
                        <Cards item={ item } type={ "movie" }></Cards>
                    </>) 
                    
                }) 
            }
            </div>


            
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Model;