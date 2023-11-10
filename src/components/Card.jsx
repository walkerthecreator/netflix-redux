import Card from 'react-bootstrap/Card';
import { fetchDetails, fetchVideos, setPlatform, togglePopup } from '../feature/commonSlice';
import { useDispatch } from 'react-redux';

function Cards({ item , type }) {

    const dispatch = useDispatch()

        function details(){
            dispatch(fetchDetails({type : type , id : item.id}))
            dispatch(fetchVideos({ type : type , id : item?.id }))
            dispatch(togglePopup()) 
            dispatch(setPlatform(type))
        }

  return (
    <Card style={{ width: '15rem' }} className='bg-dark text-light' onClick={ details  }>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${ item.backdrop_path }`} />
      <Card.Body>
        <Card.Title className='text-truncate'>{ item.original_title || item.original_name }</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cards;