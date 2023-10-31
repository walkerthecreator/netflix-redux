import Card from 'react-bootstrap/Card';

function Cards({ item }) {
  return (
    <Card style={{ width: '15rem' }} className='bg-dark text-light'>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${ item.backdrop_path }`} />
      <Card.Body>
        <Card.Title className='text-truncate'>{ item.original_title }</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cards;