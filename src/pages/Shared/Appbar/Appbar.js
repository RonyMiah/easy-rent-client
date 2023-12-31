import { Container, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../images/easyrent.png'
import useAuth from '../../../hooks/useAuth';

// import { useDispatch, useSelector } from 'react-redux';
import './Appbar.css';
import { AccountCircle } from '@mui/icons-material';

const Appbar = () => {
  const { user, logOut } = useAuth()
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  }

  // onst [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Container>
      <nav className='all-items'>
        <div className='logo-img'>
          <img styel={{ width: '100px' }} src={logo} alt="" />
        </div>

        <div className={click ? 'nav-menu active' : 'nav-menu'}>
          <Link className='single-link' to='/home'>Home</Link>
          <Link className='single-link' to='/details'>Services</Link>
          <Link className='single-link' to='/course'>Courses</Link>
          <Link className='single-link' to='/contactUs'>Contact Us</Link>
          <Link className='single-link' to='/AboutUs'>About Us</Link>
          {/* <Link className='single-link' to='/ChatApp'>Live Chat</Link> */}


          {!user.email &&
            <Link as={Link} to="/login" className='single-link'>Login</Link>
          }



        </div>
        {
          user?.email &&

          <div >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >

              {user.photoURL &&
                <img className='photosize' src={user?.photoURL} alt="" />
              }

              {!user.photoURL &&
                <AccountCircle />
              }

            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Link as={Link} to="/profile" className='single-link-btn'>Profile</Link></MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className='single-link-btn' to='/newDashbord'>Dashboard</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className='single-link-btn' to='/blog'>Blogs</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}><Link as={Link} to="/login" className='single-link-btn'>
                <button className='nav-btn' onClick={logOut}>Logout</button>
              </Link></MenuItem>
            </Menu>
          </div>
        }

        {/* {
          user?.email &&
          <div >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Link as={Link} to="/profile" className='single-link'>Profile</Link></MenuItem>
              <MenuItem onClick={handleClose}>{!user.email &&
                <Link as={Link} to="/login" className='single-link'>Login</Link>
              }

                {
                  user?.email &&
                  <Box>
                    <Link className='single-link' to='/Dashbord'>Dashboard</Link>
                    <Link as={Link} to="/login" className='single-link'>
                      Hi {user?.displayName}
                    </Link>
                    <Link as={Link} to="/login" className='single-link'>
                      <button className='single-link' onClick={logOut}>Logout</button>
                    </Link>

                  </Box>
                }</MenuItem>
            </Menu>
          </div>
        } */}
        {/* {
          user?.email &&
          <Link className='single-link' to='/newDashbord'>Dashboard</Link>
        }
        {
          user?.email &&
          <Link to="/login" className='single-link'>
            Hi {user?.displayName}
          </Link>
        }
        {
          user?.email &&
          <Link className='single-link' to="/login">
            <button className='logout-btn' onClick={logOut}>Logout</button>
          </Link>
        } */}

        {/* </div> */}

        <div onClick={handleClick} className='menu-icon'>
          <i className={click ? 'bx bxs-message-square-x icon-style' : 'bx bx-menu icon-style'}></i>
        </div>
      </nav>

    </Container>
  )
}

export default Appbar;