import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '../feature/commonSlice';
import { selectTvDetails } from '../feature/tvSlice';

function Model() {

    const show = useSelector(state => state.common.isOpen)
    const dispatch = useDispatch()
        const details = useSelector(selectTvDetails)


    function toggleShow(){
        dispatch(togglePopup())
    }


  return (
    <>
 
      <Button variant='light' onClick={ toggleShow }> More Info </Button>
      
      <Modal
        size="lg"
        show={show}
        onHide={toggleShow}
        aria-labelledby="example-modal-sizes-title-lg"
        className='text-dark'
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" >
            { details?.data?.name }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Model;