import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Logo from '../../img/nav-logo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsPersonFill } from 'react-icons/bs';

function EcoNav() {

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="/"><img src={Logo} width="80" height="28" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav variant="tabs">
              <Nav.Item>
                <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Ecopontos" className="nav-link" activeClassName="active">Ecopontos</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/Register" className="nav-link" activeClassName="active">Cadastre-se</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to ="/Donation" className="nav-link" activeClassName="active">Produtos</NavLink>
              </Nav.Item>
            </Nav>
          </Nav>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <BsPersonFill />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/user/accountsettings">Perfil</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/Sair">Sair</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquisar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="btn btn-success custom-btn"><i className="fa fa-search"></i> </Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EcoNav;
