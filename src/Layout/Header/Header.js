import React from 'react'
import './Header.css';
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import logo from '../../../src/logo.svg';
//import CallIcon from './callus.svg';
//import LanguageIcon from './language.svg';
import reset from "./font.svg";
import zoomout from "./font-decrease.svg";
import zoomin from '../Header/font-plus.svg'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Container } from "react-bootstrap"


 
function Header() {
  return (
    <header>
      <Container>
      <div className='Header'>
      <div className="Header-top">
        <a
          className="App-link"
          href="https://www.aicte-india.org/"
          target="_self"
          rel="self"
        ><img src={logo} className="App-logo" alt="logo" /></a>
      </div>
      <div className="Header-topright">
          <menuass id="menu">
            <a href="tel:180 0425 1333">
            
              Call Us
            </a>
            <a href="/l">
              
              Language
            </a>
            <a href="/in">
              <img src={zoomin} className="App-logo" alt="font-plus" />
            </a>
            <a href="reset">
              <img src={reset} className="App-logo" alt="font" />
            </a>
            <a href="/out">
              <img src={zoomout} className="App-logo" alt="font-minus" />
            </a>
          </menuass>
          <MDBBtn id="login" outline color='warning' size='sm' tag='a' href='/login' >
           Login
          </MDBBtn><MDBBtn id="register" color='warning' size='sm' tag='a' href='/signup'>
          Register
          </MDBBtn>
          
          
         
        </div>
        </div>
        </Container>
    </header>
  )
}

export default Header