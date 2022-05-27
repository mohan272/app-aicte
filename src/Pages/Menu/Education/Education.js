import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { MDBContainer } from 'mdb-react-ui-kit';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import Header from '../../../Layout/Header/Header';
import { Typography } from '@mui/material';
import Navbar from '../../../Layout/Header/Navbar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const mainFeaturedPost = {
  title: 'Education',
  image: './images/education.jpg',
  imageText: 'main image description',

  
};

const theme = createTheme();

function Education() {
  return (
    <div>
     <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Navbar />
    <div className='body1'></div>
    < MDBContainer maxWidth="lg">
      

      <MainFeaturedPost post={mainFeaturedPost} />
        <Typography variant="p" className='about-title'>Education or teaching in the broadest sense is any act or experience that has a formative effect on the mind, character or physical ability of an individual. In its technical sense,  education is the process by which society deliberately transmits its accumulated knowledge, skills and values from one generation to another.</Typography><br /><br />

        <Typography variant="h3">Brief Introduction</Typography><br />
        <Typography>
        Teachers in educational institutions direct the education of students and might draw on many subjects, including reading, writing, mathematics, science and history. This process is sometimes called schooling when referring to the education of teaching only a certain subject, usually as professors at institutions of higher learning. There is also education in fields for those who want specific vocational skills, such as those required to be a pilot. In addition there is an array of education possible at the informal level, such as in museums and libraries, with the Internet and in life experience. Many non-traditional education options are now available and continue to evolve.
        </Typography><br />
        <Typography variant="h3">The Right to Education</Typography><br />
        <Typography>
            <strong>The Right to Education</strong> has been established as a basic human right: since 1952, Article 2 of the first Protocol to the European Convention on Human Rights obliges all signatory parties to guarantee the right to education. At world level, the United Nations' International Covenant on Economic, Social and Cultural Rights of 1966 guarantees this right under its Article 13.
            </Typography><br />
        <Typography>
            <strong>India has passed the Right to Education Bill 2009 in August 2009</strong>
        </Typography><br />
        
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Eleventh Five Year Plan Education
            </Typography>
            <Typography variant="h5" component="div">
            The role of education in facilitating social and economic progress is well recognized. It opens up opportunities leading to both individual and group entitlements.
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" variant="contained">Learn More</Button>
          </CardActions>
        </Card><br/>

        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Engendering XI Five Year Plan
            </Typography>
            <Typography variant="h5" component="div">
            Engendering XI Five Year Plan (below to be added as description) A civil society initiative coordinated by National Alliance of Women (NAWO) with support from Ministry of Women and Child Development (MWCD), UN Development Program (UNDP) and UN Development Fund for Women (UNIFEM).
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" variant="contained">Learn More</Button>
          </CardActions>
        </Card><br/>

        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Higher Education XI Plan
            </Typography>
            <Typography variant="h5" component="div">
            A little more than half a century has passed since the government initiated a planned development of higher education in the country with the establishment of University Grants Commission in 1953.
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" variant="contained">Learn More</Button>
          </CardActions>
        </Card><br/>
        
    </ MDBContainer>
    
  </ThemeProvider>
    </div>
  )
}

export default Education