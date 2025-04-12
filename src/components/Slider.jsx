import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem', 
  fontWeight: 'bold',

  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: './flag2.png',
    caption: 'Raise Voice'
  },
  {
    url: './baycot2.jpg',
    caption: 'Boycott Israeil Product'
  },
  {
    url: './slider3.jpg',
    caption: 'Donation'
  },
];

const Slider = () => {
    return (
      <div className="slide-container">
        <Slide arrows={true}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slider