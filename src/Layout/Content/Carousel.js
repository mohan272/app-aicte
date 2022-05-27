import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  //MDBCarouselCaption,
  MDBContainer
} from 'mdb-react-ui-kit';
import './Carousel.css';



function Carousel() {
  return (
    <MDBContainer id='carousel'>
    <MDBCarousel showIndicators  fade>
      <MDBCarouselInner className='img1'>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='/images/one.png' alt='...' />
          {/*<MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>*/}
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='/images/two.png' alt='...' />
          {/*<MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>*/}
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='/images/three.png' alt='...' />
          {/*<MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>*/}
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  )
}

export default Carousel