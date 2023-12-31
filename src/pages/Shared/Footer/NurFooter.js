import React from 'react'
import './NurFooter.css'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import logo from '../../../images/easyrent.png'
import lindin from '../../../images/linkdin-icon.png'
import facebook from '../../../images/facebook-icon.png'
import meta from '../../../images/meta-icon.png'


const NurFooter = () => {
  return (
    <div className='footer-size'>
      <Container>
        <Grid container spacing={{ xs: 2, md: 3, lg: 5 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <div className='first-div'>
              <img src={logo} alt="" />
              <p>©2022 Sworkit® by Nexercise.
                Terms of Service I Privacy Policy</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={2}>
            <div className="sec-div">
              <h4>Products</h4>
              <p>Product</p>
              <p>Pricing</p>
              <p>Log In</p>
              <p>Request acces</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={2}>

            <div className="third-div">
              <h4>About us</h4>
              <p>About EasyRent</p>
              <p>Contact us</p>
              <p>Features</p>
              <p>Careers</p>
            </div>

          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={2}>
            <div className="fourth-div">
              <h4>Resources</h4>
              <p>Help Center</p>
              <p>Book a demo</p>
              <p>Server status</p>
              <p>Blog</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <div className="five-div">
              <h4>Get in touch</h4>
              <p>Questions or feedback? <br />
                we ‘d love to her from you
              </p>
              <div className='footer-icon'>

                <img src={meta} alt="" />
                <img src={lindin} alt="" />
                <img src={facebook} alt="" />

              </div>
            </div>

          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default NurFooter