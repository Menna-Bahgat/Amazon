import React from 'react'; 
import './Navs.css'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoo from '../../images/header-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useAuth } from '../Context/GlobalState';


const Navs = () => {
  const {basket} = useAuth()
  return (
    <div className='header'>
    <Navbar expand="lg">
      <Container fluid>
        <Link to="/">
          <img className='header-logo' src={logoo}/>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto "  navbarScroll>
            <div className='search'>
              <input type='search' placeholder='search...'/>
            </div>
            <div className='search-head'>
              <SearchIcon className='SearchIcon'/>
            </div>
          </Nav>
          <Form className='links'>
            <Link to="/Login">
              <div className='top'>
                <span className="header-optionLineOne">Hello Guest</span>
                <span className="header-optionLineTwo">Sign in</span>
              </div>
            </Link>
            <Link to="/Orders">
              <div className='top'>
                <span className="header-optionLineOne">Returns</span>
                <span className="header-optionLineTwo">& Orders</span>
              </div>
            </Link>
            <Link to="/">
              <div className='top'>
                <span className="header-optionLineOne">your</span>
                <span className="header-optionLineTwo">Prime</span>
              </div>
            </Link>
            <Link to="/Checkout">
              <div className='header-optionBasket'>
                <ShoppingBasketIcon/>
                <span className="header-optionLineTwo header-basketCount">{basket?.length}</span>
              </div>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
    
  )
}

export default Navs