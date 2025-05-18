import * as React from 'react';
import Rating from '@mui/material/Rating';
import './css/RatingDisplay.css';


function RatingDisplay({value}) {
  return (
      <Rating name="half-rating-read" defaultValue={value} precision={0.5} readOnly className='custom-rating'  sx={{
    color: '#EE5D02'
  }}/>
  );
}

export default RatingDisplay;