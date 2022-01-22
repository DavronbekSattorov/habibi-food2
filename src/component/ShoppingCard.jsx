import { InvoiceContext } from '../App';
import { useContext } from 'react';

import Button from '@mui/material/Button';

const ShoppingCard = () => {
    const [
        dataStory, 
        handleFoodType, 
        filteredDataFood, 
        handleModalSelect,
        handleModalClose,
        modalData,
        handleSearchFood,
        searchInputVale,
        shopData ] = useContext(InvoiceContext);
    return(
        <div className="shoppingCard-container">
            <div className="shoppingCard-selected">
                {
                    shopData.map(el => {
                        return(
                            <div className="shoppingCard-selectedBox">
                                <div className="shoppinCard-img">
                                    <img src={el.img}alt=""  className="shoppinCard-img"/>
                                </div>
                                <div className="shoppingCard-name">
                                    <h3>{el.name}</h3>
                                    <p>${el.price}</p>
                                </div>
                                <div className="shoppingCard-add">
                                    <button> - </button>
                                    <p>0</p>
                                    <button> + </button>
                                </div>
                            </div>
                        )
                    })
                }
               

            </div>
            <div className='shoppingCard-buttons'>
                <Button variant="contained">Order</Button>
                <Button >Empty Card</Button>
                <div className='total'>Total: </div>
            </div>
        </div>
    )
}

export default ShoppingCard;