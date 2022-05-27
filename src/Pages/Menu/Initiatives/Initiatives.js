import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { MDBContainer } from 'mdb-react-ui-kit';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import Header from '../../../Layout/Header/Header';
import { Typography } from '@mui/material';
import Navbar from '../../../Layout/Header/Navbar'

const mainFeaturedPost = {
  title: 'Initiatives',
  image: 'https://www.aicte-india.org/sites/default/files/banners/initiatives.jpg',
  imageText: 'main image description',

  
};
const FeaturedPost = {
  title: '',
  image: 'https://www.aicte-india.org/sites/all/themes/educational/images/our_vision_bg.jpg',
  description: '“To be a world-class organization leading technological and socio-economic development of the country by enhancing the global competitiveness of technical manpower and by ensuring high quality technical education to all sections of the society.”',
  
};

const theme = createTheme();

function Initiatives() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Navbar />
        <div className='body1'></div>
        < MDBContainer maxWidth="lg">
          

          <MainFeaturedPost post={mainFeaturedPost} />
            <Typography variant="p" className='about-title'>Read about the initiatives undertaken by AICTE to promote technical education</Typography><br />
            <Typography variant="h3" component="h3">The Organisation</Typography><br />
            <Typography>
            In accordance with the provisions of the AICTE Act (1987), for the first five years after its inception in 1988, the Minister for Human Resource Development, the Government of India, was the Chairman of the Council. The first full-time Chairman was appointed on July 2, 1993 and the Council was reconstituted in March 1994 with a term of three years. The Executive Committee was re-constituted on July 7, 1994 and All India Board of Studies and Advisory Boards were constituted in 1994-95. Regional Offices of the Ministry of Human Resource Development, the Government of India, located in Kolkata, Chennai, Kanpur, and Mumbai were transferred to AICTE and the staff working in these offices were also deputed to the Council on foreign service terms w.e.f. October 1, 1995.
            </Typography><br />
            <Typography>
            These offices functioned as secretariats of regional Committees in the four regions (North, East, West and South). Three new regional Committees in southwest, central, and northwest regions with their secretariats located in Bangalore, Bhopal, and Chandigarh, respectively, were also established on July 27, 1994. One more regional committee in South-Central region with its Secretariat in Hyderabad was notified on March 8, 2007.
            </Typography><br />
            <Typography variant="h2">Our Vision</Typography>
            <Typography>
            “To be a world-class organization leading technological and socio-economic development of the country by enhancing the global competitiveness of technical manpower and by ensuring high quality technical education to all sections of the society.”
            </Typography>
            <MainFeaturedPost post={FeaturedPost} />
        </ MDBContainer>
        
      </ThemeProvider>
  )
}

export default Initiatives