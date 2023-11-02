import Card from 'react-bootstrap/Card';

function Cards({ item , type }) {
  return (
    <Card style={{ width: '15rem' }} className='bg-dark text-light'>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${ item.backdrop_path }`} />
      <Card.Body>
        <Card.Title className='text-truncate'>{ (type === "movie") ? item.original_title : item.original_name }</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cards;