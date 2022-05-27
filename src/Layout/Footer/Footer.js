import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>About Us</h6>
              <p>
                <a href='#' className='text-reset'>
                Helpdesk Number
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                Reports
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                Directory
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                Privacy Policy
                </a>
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>AICTE</h6>
              <p>
                <a href='#!' className='text-reset'>
                Helpdesk Number
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Reports
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Directory
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Privacy Policy
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Related sites</h6>
              <p>
                <a href='#' className='text-reset'>
                AICTE Dashboard
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                Centralized Support System
                </a>
              </p>
              <p>
                <a href='/order' className='text-reset'>
                PGDM Student Verification
                </a>
              </p>
              <p>
                <a href='/help' className='text-reset'>
                Reporting by Institutes
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p>
                <i className='fas fa-home me-3'></i> New York, NY 10012, US
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@example.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 01 234 567 88
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          AICTE
        </a>
      </div>
    </MDBFooter>
  );
}