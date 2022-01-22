import { InvoiceContext } from '../App';
import { useContext } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';





const Story = () => {
    const [data] = useContext(InvoiceContext);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
    return (
        <div className="story">
                {
                    data.length > 0 ? <Slider {...settings} className='storyImageSlider'>

                    {
                        data.map(el => {
                            return(
                                <div className='story-box'><img className='story-image' src={el.img} alt="" /></div>
                            )
                        }) 
                    }
                 </Slider> :  <CircularProgress />     
                } 
        </div>
    )
}

export default Story;