import { InvoiceContext } from '../App';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const MenuBar = () => {
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
        <div className="menuBar">
            <h1>Food Categories</h1>
            <Stack direction="row" spacing={3} style={{display:'flex', flexWrap:'wrap'}}>
                <Button variant="outlined" onClick={e => handleFoodType(e)} style={{marginBottom: '10px'}}>Breakfast</Button>
                <Button variant="outlined" onClick={e => handleFoodType(e)} style={{marginBottom: '10px'}}>Lunch</Button>
                <Button variant="outlined" onClick={e => handleFoodType(e)} style={{marginBottom: '10px'}}> Dinner</Button>
                <Button variant="outlined" onClick={e => handleFoodType(e)} style={{marginBottom: '10px'}}>Dessert</Button>
                <Button variant="outlined" onClick={e => handleFoodType(e)} style={{marginBottom: '10px'}}>Drinks</Button>
               
            </Stack>

            <div className='divider'>
                {
                    filteredDataFood.length > 0 ? filteredDataFood.map(el => {
                        return(

                            <Box sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper', border: '1px solid #dfe6e9', borderRadius: '10px', marginBottom: '10px' }}>
            
                                <div>
                                    <img className='food-box-img' src={el.img} alt="" />
                                </div>
            
                                    <Divider variant="middle" />
                                    <Box sx={{ m: 2 }}>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {el.name}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div">
                                            ${el.price}
                                        </Typography>
                                    
                                    </Box>
                                    <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                                        <Button onClick={id => handleModalSelect(el.id) }>More</Button>
                                        <Button variant="outlined" onClick={id => handleAddCardButton(el.id)}>Add to cart</Button>
                                    </Box>
                            </Box>
                        )
                    }) :  <CircularProgress />  
                } 
            </div>

        </div>
    )
}

export default MenuBar;