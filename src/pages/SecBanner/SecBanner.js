import { Container } from '@mui/material'
import React from 'react'
import banner from '../../images/easyrent-home-car-img.png';
import { Link } from 'react-router-dom';
import './SecBanner.css';


const SecBanner = () => {
  return (
    <div className='img-box'>
      <Container>
        <div className="main-box">
          <div className='banner-text'>
            <div>
              <h1 className='banner-heading'>Car Rental <br />
                in Bangladesh.</h1>
              <p>Don’t deny yourself the pleasur of<br />
                driveng the best premium cars from <br />
                around the word world here and now.</p>
            </div>
          </div>

          <div className='banner-img'>
            <img src={banner} alt="" />
          </div>
          <Link to='/ChatApp'>
            <figure class="chat-icon">
              <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/chat-2-icon.png" alt="A chat icon" />
            </figure>
          </Link>

        </div>
      </Container>
    </div>
  )
}

export default SecBanner