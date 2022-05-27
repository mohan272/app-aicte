import React from 'react'
import Header from '../../../Layout/Header/Header'
import Navbar from '../../../Layout/Header/Navbar'
import { Container } from "react-bootstrap"
import { Typography } from '@mui/material';
import MainFeaturedPost from './MainFeaturedPost';

const mainFeaturedPost = {
  title: 'NEWSROOM',
  image: 'https://www.aicte-india.org/sites/default/files/banners/Newsroom_3.jpg',
  
};
const FeaturedPost = {
  title: '',
  image: 'https://www.aicte-india.org/sites/all/themes/educational/images/our_vision_bg.jpg',
  description: '',
  
};

function Newsroom() {
  return (
    <div>
      
      <Header/>
      <Navbar />
      <div className='body1'></div>
      <Container><MainFeaturedPost post={mainFeaturedPost} />
            <Typography variant="p" className='about-title'>Read the latest news and press releases</Typography><br />
            <Typography variant="h3" component="h3">In the News</Typography><br />
            <Typography varient="h4" style={{ fontWeight: 600 }}>Monday, October 12, 2020 Deccan News</Typography>
            <Typography>
            New Delhi: The All India Council for Technical Education (AICTE) announced on Monday that it has partnered with Microsoft to empower students and educators with future skills. As part of this partnership, more than 1,500 Microsoft course modules are made available to students and educators free of charge via the ELIS of AICTE’s e-learning portal. Microsoft’s learning resource center, Microsoft Learn, is integrated with the ELIS platform to provide access to personalized learning pathways and resources for students, which include a wide range of technologies, including AI, IoT, computer science, and cloud computing, among others.
            </Typography>
            <hr/>
            <Typography varient="h4" style={{ fontWeight: 600 }}>Tuesday, October 8, 2019 News18</Typography>
            <Typography>
            New Delhi: The All India Council of Technical Education (AICTE) has directed engineering colleges and technical institutions to allow student entrepreneurs to sit for examination even if their attendance is short. The colleges have also been asked to explore provisions of on-campus accommodation to student entrepreneurs and permitting semester break for working on their startups.
            </Typography>
            <hr/>
            <Typography varient="h4" style={{ fontWeight: 600 }}>Tuesday, October 8, 2019 Times of India</Typography>
            <Typography>
            AGRA: To help all the nearby Agra villages to overcome their problems, students of engineering colleges will help them find solutions and also, work for their development. Each of the engineering college has been asked to adopt at least five villages for the overall development. Some of the engineering colleges have started a survey to identify the villages.
            </Typography>
            <hr/>
            <Typography variant="h2">Gallery</Typography>
            <Typography>
            Videos
            </Typography>
            <MainFeaturedPost post={FeaturedPost} /><MainFeaturedPost post={FeaturedPost} /><MainFeaturedPost post={FeaturedPost} />
            
            </Container>
      
    </div>
  )
}

export default Newsroom