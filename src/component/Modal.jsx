import { InvoiceContext } from '../App';
import { useContext } from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Modal = () => {

    const [
        dataStory, 
        handleFoodType, 
        filteredDataFood, 
        handleModalSelect,
        handleModalClose,
        modalData,
        handleSearchFood,
        searchInputVale,
        shopData,
        handleAddCardButton ] = useContext(InvoiceContext);
    return(
        <div className="modalContainer">
            <div className="modal-box">
                <div className="modal-box-left">
                    <img src={modalData[0].img} alt="" className="modal-box-right-img" />
                    <h4>{modalData[0].name}</h4>
                    <p>{modalData[0].price}</p>
                </div>
                <div className="modal-box-right">
                    <button className='modal-close' onClick={handleModalClose}>X</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat veritatis voluptatem vel voluptas autem, voluptatibus est quas quaerat dolore architecto! Aut error nobis veniam.</p>
                    <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                        <Button onClick={id => handleAddCardButton(modalData[0].id)}>Add to cart</Button>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Modal;