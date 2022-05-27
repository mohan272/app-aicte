import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit';
import Typography from '@mui/material/Typography';
import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Quicklink() {
  return (
    <MDBContainer id='link'>
        <Typography variant="h4" component="h4" id="lk">
            Quicklinks
        </Typography>
        <div className='link-item'>
          <MDBCard id='card' style={{ maxWidth: '14rem' }}>
            <MDBCardBody>
              <MDBCardText className="class">Student Learning Assessment-PARAKH</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard id='card' style={{ maxWidth: '14rem' }}>
            <MDBCardBody>
              <MDBCardText className="class">AICTE-AI Language Translation Tool</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard id='card' style={{ maxWidth: '14rem' }}>
            <MDBCardBody>
              <MDBCardText className="class">ODL and Online Regulatory Framework</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard id='card' style={{ maxWidth: '14rem' ,minHeight: '6rem' }}>
            <MDBCardBody>
              <MDBCardText className="class">AICTE FIT India Challenge</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard id='card' style={{ maxWidth: '14rem' ,minHeight: '6rem' }}>
            <MDBCardBody>
              <MDBCardText className="class">AICTE FIT India Challenge</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className='link-item'>
          <MDBCard id='card' style={{ maxWidth: '14rem' }}>
            <MDBCardBody>
              <MDBCardText className="class">AICTE FIT India Challenge</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard id='card' style={{ maxWidth: '14rem', minWidth:'14rem',minHeight: '6rem' }}>
            <MDBCardBody className='aicte'>
              <MDBCardText className="class">AICTE FIT India Challenge</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard id='card' style={{ maxWidth: '14rem' }}>
            <MDBCardBody>
              <MDBCardText className="class">ODL and Online Regulatory Framework</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard id='card' style={{ maxWidth: '14rem' ,minHeight: '6rem' }}>
            <MDBCardBody>
              <MDBCardText className="class">AICTE FIT India Challenge</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard id='card' style={{ maxWidth: '14rem' ,minHeight: '6rem' }}>
            <MDBCardBody>
              <MDBCardText className="class">AICTE FIT India Challenge</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div style={{textAlign: 'center', marginTop: '10px' ,color:'#0875E2' }}>
          Show More <KeyboardArrowDownIcon />
        </div>
    </MDBContainer>
  )
}

export default Quicklink