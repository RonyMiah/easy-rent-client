
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import React from 'react'
import './NurBanner.css'
import icon_1 from '../../../images/location-icon.png'
import icon_2 from '../../../images/calander-icon.png'
import icon_3 from '../../../images/datepicer-icon.png'

const NurBanner = () => {
  return (
    <div className="page-size">
      <Container>
        <p className="small-title">HOW IT WORKS</p>
        <h1>To Rent follow this 3 working Steps</h1>
        <div className='main-icon-dev'>
        <Grid container spacing={{ xs: 2, md: 3, lg: 5}} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>         
            <Grid item xs={12} sm={12} md={6} lg={4}>              
                <div className='icon-div'>
                <div className='icon-img'>
                  <img src={icon_1} alt="" />
                </div>
                <div className='icon-text'>
                  <h4>Choose your location</h4>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </Grid> 
            <Grid item xs={12} sm={12} md={6} lg={4}>              
                <div className='icon-div'>
                <div className='icon-img'>
                  <img src={icon_2} alt="" />
                </div>
                <div className='icon-text'>
                  <h4>Pic-up date</h4>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </Grid> 
            <Grid item xs={12} sm={12} md={6} lg={4}>              
                <div className='icon-div'>
                <div className='icon-img'>
                  <img src={icon_3} alt="" />
                </div>
                <div className='icon-text'>
                  <h4>Book your car</h4>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </Grid> 
          </Grid> 
        </div>
      </Container>
    </div>
  )
}

export default NurBanner