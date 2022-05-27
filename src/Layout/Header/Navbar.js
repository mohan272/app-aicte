import React from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink
} from 'mdb-react-ui-kit';
import './Navbar.css'
import AppBar from '@mui/material/AppBar';
import SearchAppBar from './Search'
import { Container } from "react-bootstrap"

export default function Menu() {
  return (
    <AppBar position="static" >
      <MDBNavbar expand='md' light  id='container' style={{ backgroundColor: '#F75700' }}>
        <Container>

            <div className='collapse navbar-collapse' id='navbarExample01'>
                <MDBNavbarNav right className='mb-2 mb-lg-0'>
                <MDBNavbarItem active><MDBNavbarLink aria-current='page' href='/home'>HOME</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='/about'>ABOUT</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='/news'>NEWSROOM</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='/bureaus'>BUREAUS</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='/initiatives'>INITIATIVES</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='/schemes'>SCHEMES</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='/education'>EDUCATION</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='/opportunities'>OPPORTUNITIES</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='/statistics'>STATISTICS</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='/bulletins'>BULLETINS</MDBNavbarLink></MDBNavbarItem>
                </MDBNavbarNav>
            </div>
            <div className='search'>
            <SearchAppBar/>
            </div>
        </Container>
      </MDBNavbar>
    </AppBar>
  );
}


